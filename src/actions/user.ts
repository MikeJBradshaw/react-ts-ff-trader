export interface User {
    username: string;
    user_id: string;
    displayname: string;
    avatar: string;
};


export const UPDATE_USER = 'UPDATE_USER';
export type UpdateUserAction = {type: typeof UPDATE_USER, user: User};
export const updateUser = (user: User): UpdateUserAction => ({type: UPDATE_USER, user});


export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export type UpdateUsernameAction = {type: typeof UPDATE_USERNAME, username: string};
export const updateUsername = (username: string): UpdateUsernameAction => ({type: UPDATE_USERNAME, username});


export const LOG_OUT = 'LOG_OUT';
export type LogOutAction = {type: typeof LOG_OUT};
export const logOut = (): LogOutAction => ({type: LOG_OUT});


export type UserAction = UpdateUserAction | UpdateUsernameAction | LogOutAction;
