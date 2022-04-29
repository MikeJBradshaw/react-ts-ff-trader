import { fromFetch } from 'rxjs/fetch';
import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { LOAD_USER, updateUser, userError } from '../actions/user';
import { of } from 'rxjs';
import type { Observable } from 'rxjs';
import type { StateObservable } from 'redux-observable';
import type { RootState } from '../store';
import type { LoadUserAction, UserErrorAction } from '../actions/user';


const loadUserEpic = (action$: Observable<LoadUserAction | UserErrorAction>, state$: StateObservable<RootState>) => action$.pipe(
    ofType(LOAD_USER),
    switchMap(() => fromFetch(
        `https://api.sleeper.app/v1/user/${state$.value.user.username}`,
        {selector: res => res.json()}
    ).pipe(map(user => {
        if (!user) {
            return userError('Username not found');
        }

        return updateUser(user);
    }))),
    catchError(err => of(userError(err.message)))
);

export default combineEpics(loadUserEpic as any);
