import { LEAGUES_LOADED, LEAGUES_ERROR } from '../actions/leagues';
import type { Reducer } from 'redux';
import type { League, LeaguesAction } from '../actions/leagues';


export interface LeaguesState {
    leagues: League[];
    loading: boolean;
    error?: string;
};


const leaguesReducer: Reducer<LeaguesState, LeaguesAction> = (state = {loading: true, leagues: []}, action) => {
    switch(action.type) {
        case LEAGUES_LOADED:
            return {leagues: action.leagues, loading: false, error: ''};

        case LEAGUES_ERROR:
            return {...state, loading: false, error: action.error};

        default:
            return state;
    }
};


export default leaguesReducer;
