import { createStore, combineReducers, applyMiddleware } from 'redux';     
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import user from './reducers/user';
import leagues from './reducers/leagues';
import dashboard from './reducers/dashboard';
import dashboardEpic from './epics/dashboard';
import userEpic from './epics/user';
import leaguesEpic from './epics/leagues';

const reducers = combineReducers({ leagues, user, dashboard });                
const epicMiddleware = createEpicMiddleware();

// set up the store
const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(combineEpics<any>(dashboardEpic as any, userEpic, leaguesEpic));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;          
export default store;                                     
