import { DISPLAY_DATA, INIT, LEAGUE_ERROR, LOAD_DATA } from '../actions/dashboard';
import type { Reducer } from 'redux';
import type { DashboardData, DashboardAction } from '../actions/dashboard';


interface DashboardState {
    data?: DashboardData;
    errorMessage?: string;
    loading?: boolean;
}

const dashboardReducer: Reducer<DashboardState, DashboardAction> = (state = {}, action) => {
        switch(action.type) {
            case DISPLAY_DATA:
                return {...state, data: action.data, loading: false};

            case INIT:
                return {...state, loading: true};

            case LEAGUE_ERROR:
                return {...state, errorMessage: action.message};

            case LOAD_DATA:
                const { errorMessage, ...newState } = state;
                return newState;

            default:
                return state;
        }
};


export default dashboardReducer;
