import { forkJoin, of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { INIT, displayData, leagueError } from '../actions/dashboard';
import type { Observable } from 'rxjs';
import type { InitAction, Transaction, UserStat } from '../actions/dashboard';
import type { User } from '../actions/user';
import type { StateObservable } from 'redux-observable';
import type { RootState } from '../store';


const LEAGUE_ID = '723321264051175424';
const ALLOWED_TRADES = 25;
const TRADE_COST = 2;


const initEpic = (action$: Observable<InitAction>, state$: StateObservable<RootState>) => action$.pipe(
    ofType(INIT),
    switchMap(() => forkJoin(
        // fromFetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}`, {selector: res => res.json()}),
        fromFetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/users`, {selector: res => res.json()}),
        ...Array(18).fill(null).map((_, i) => fromFetch(
            `https://api.sleeper.app/v1/league/${LEAGUE_ID}/transactions/${i + 1}`,
            {selector: res => res.json()}
        ))
    ).pipe(map(([owners, ...weeklyTransactions]: [User[], ...Transaction[][]]) => {
        let allTransactions: Transaction[] = [];
        weeklyTransactions.forEach(ts => allTransactions = allTransactions.concat(ts));

        const stats: UserStat[] = owners.map(({ avatar, user_id, display_name }) => {
            const trades = allTransactions.filter(({ creator }) => creator === user_id).length;

            return {
                avatar,
                user_id,
                display_name,
                trades,
                balance: trades > ALLOWED_TRADES ? (trades - ALLOWED_TRADES) * TRADE_COST : 0
            };
        });

        const { user_id } = state$.value.user as User;
        const userStats = stats.filter(({ user_id: id }) => id === user_id)[0];

        return displayData({ owners, userStats, stats });
    }))),
    catchError(err => of(leagueError(err.message)))
);


export default initEpic;
