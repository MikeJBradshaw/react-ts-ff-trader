import { DISPLAY_DATA } from '../actions/dashboard';
import type { Reducer } from 'redux';
import type { Dashboard, DashboardAction } from '../actions/dashboard';


interface DashboardState {
    data?: Dashboard;
}

const dashboardReducer: Reducer<DashboardState, DashboardAction> = (state = {}, action) => {
        console.log(action);
        switch(action.type) {
            case DISPLAY_DATA:
                return {...state, data: action.data};

            default:
                return state;
        }
};


export default dashboardReducer;
