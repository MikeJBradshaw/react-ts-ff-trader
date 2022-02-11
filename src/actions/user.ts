export interface User {
    username: string;
    user_id: string;
    display_name: string;
    avatar: string;
};


export const LOG_OUT = 'LOG_OUT';
export type LogOutAction = {type: typeof LOG_OUT};
export const logOut = (): LogOutAction => ({type: LOG_OUT});


export const LOAD_USER = 'LOAD_USER';
export type LoadUserAction = {type: typeof LOAD_USER};
export const loadUser = (): LoadUserAction => ({type: LOAD_USER});


export const UPDATE_USER = 'UPDATE_USER';
export type UpdateUserAction = {type: typeof UPDATE_USER, user: User};
export const updateUser = (user: User): UpdateUserAction => ({type: UPDATE_USER, user});


export const USER_ERROR = 'USER_ERROR';
export type UserErrorAction = {type: typeof USER_ERROR, message: string};
export const userError = (message: string): UserErrorAction => ({type: USER_ERROR, message});


export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export type UpdateUsernameAction = {type: typeof UPDATE_USERNAME, username: string};
export const updateUsername = (username: string): UpdateUsernameAction => ({type: UPDATE_USERNAME, username});


export type UserAction = UpdateUserAction | UpdateUsernameAction | LogOutAction | UserErrorAction | LoadUserAction;
