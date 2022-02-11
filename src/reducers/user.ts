import { UPDATE_USER, UPDATE_USERNAME, LOG_OUT, USER_ERROR, LOAD_USER } from '../actions/user';
import type { Reducer } from 'redux';
import type { UserAction, User } from '../actions/user';


interface UserState {
    username: string;
    user?: User;
    errorMessage?: string;
}


const userObject = window.localStorage.getItem('user');
let user: User;
if (userObject) {
    user = JSON.parse(userObject);
}

const userReducer: Reducer<UserState, UserAction> = (state = {username: user?.username ?? '', user}, action) => {
    switch(action.type) {
        case LOAD_USER:
            const { errorMessage, ...newState } = state;
            return newState;

        case LOG_OUT:
            window.localStorage.removeItem('user');
            return {username: ''};

        case UPDATE_USERNAME:
            return {...state, username: action.username};

        case UPDATE_USER:
            window.localStorage.setItem('user', JSON.stringify(action.user));
            return {...state, user: action.user};

        case USER_ERROR:
            return {...state, errorMessage: action.message};

        default:
            return state;
    }
};

export default userReducer;
