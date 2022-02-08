import { DISPLAY_DATA, LEAGUE_ERROR, LOAD_DATA } from '../actions/dashboard';
import type { Reducer } from 'redux';
import type { DashboardData, DashboardAction } from '../actions/dashboard';


interface DashboardState {
    data: DashboardData;
    errorMessage?: string;
}

const dashboardReducer: Reducer<DashboardState, DashboardAction> = (state = {data: {league: {}, owners: [], transactions: []}}, action) => {
        switch(action.type) {
            case DISPLAY_DATA:
                return {...state, data: action.data};

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
