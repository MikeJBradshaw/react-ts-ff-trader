import { forkJoin, from, of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { INIT, displayData, leagueError } from '../actions/dashboard';
import type { Observable } from 'rxjs';
import type { InitAction } from '../actions/dashboard';


const LEAGUE_ID = '723321264051175424';


const loadAllTransactions = (): Observable<any[] | {error: Error}> => from([1, 2, 3, 4, 5]).pipe(
    switchMap((week) => fromFetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/transactions/${week}`, {selector: res => res.json()})),
)


const initEpic = (action$: Observable<InitAction>) => action$.pipe(
    ofType(INIT),
    switchMap(() => forkJoin(
        fromFetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}`, {selector: res => res.json()}),
        fromFetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/users`, {selector: res => res.json()}),
        fromFetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/transactions/1`, {selector: res => res.json()}),
        // loadAllTransactions()
    ).pipe(map(([league, owners, transactions]) => displayData({ league, owners, transactions })))),
    catchError(err => of(leagueError(err.message)))
);


export default initEpic;
