import { createStore, combineReducers, applyMiddleware } from 'redux';     
import { createEpicMiddleware } from 'redux-observable';
import user from './reducers/user';
import dashboard from './reducers/dashboard';
import dashboardEpic from './epics/dashboard';

const reducers = combineReducers({ user, dashboard });                
const epicMiddleware = createEpicMiddleware();

// set up the store
const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(dashboardEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;          
export default store;                                     
