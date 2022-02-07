import { forkJoin } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { INIT, displayData } from '../actions/dashboard';
import type { Observable } from 'rxjs';
import type { InitAction } from '../actions/dashboard';


const LEAGUE_ID = '723321264051175424';


const initEpic = (action$: Observable<InitAction>) => action$.pipe(
    ofType(INIT),
    switchMap(() => forkJoin(
        fromFetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}`, {selector: res => res.json()}),
        fromFetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/users`, {selector: res => res.json()}),
        fromFetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}/transactions/1`, {selector: res => res.json()}),
    ).pipe(map(([league, owners, transactions]) => displayData({ league, owners, transactions }))))
);


export default initEpic;
