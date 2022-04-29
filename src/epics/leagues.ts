import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { INIT, leaguesLoaded, leaguesError } from '../actions/leagues';
import type { Observable } from 'rxjs';
import type { StateObservable } from 'redux-observable';
import type { RootState } from '../store';
import type { LeaguesAction } from '../actions/leagues';


const initLeaguesEpic = (action$: Observable<LeaguesAction>, state$: StateObservable<RootState>) => action$.pipe(
    ofType(INIT),
    switchMap(() => {
        const user_id = state$.value.user.user?.user_id as string;

        return fromFetch(
            `https://api.sleeper.app/v1/user/${user_id}/leagues/nfl/2021`,
            {selector: res => res.json()}
        )
    }),
    map(leagues => {
        if (!leagues) {
            return leaguesError('did not find leagues for the year');
        }

        return leaguesLoaded(leagues);
    }),
    catchError(err => of(leaguesError(err.messsage)))
);


export default initLeaguesEpic as any;
