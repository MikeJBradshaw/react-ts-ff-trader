import type { User } from './user';


// transaction info
export interface Transaction {
    creator: string;
    status: string;
    type: string;
};


// user info
export interface UserStat {
    user_id: string;
    trades: number;
    balance: number;
    avatar: string;
    display_name: string;
};


interface SelectedLeague {
    name: string,
    league_id: string
}

// dashboard table
export interface DashboardData {
    owners: User[];
    userStats: UserStat;
    stats: UserStat[];
    league?: SelectedLeague  // selected league to view
};


export const DISPLAY_DATA = 'DISPLAY_DATA';
export type DisplayDataAction = {type: typeof DISPLAY_DATA, data: DashboardData};
export const displayData = (data: DashboardData): DisplayDataAction => ({type: DISPLAY_DATA, data});


export const INIT = 'INIT';
export type InitAction = {type: typeof INIT};
export const init = (): InitAction => ({type: INIT});


export const LEAGUE_ERROR = 'LEAGUE_ERROR';
export type LeagueErrorAction = {type: typeof LEAGUE_ERROR, message: string};
export const leagueError = (message: string): LeagueErrorAction => ({type: LEAGUE_ERROR, message});


export const LOAD_DATA = 'LOAD_DATA';
export type LoadDataAction = {type: typeof LOAD_DATA};
export const loadData = (): LoadDataAction => ({type: LOAD_DATA})


export const UPDATE_LEAGUE = 'UPDATE_LEAGUE';
export type UpdateLeagueAction = {type: typeof UPDATE_LEAGUE, league: SelectedLeague};
export const updateLeague = (league: SelectedLeague): UpdateLeagueAction => ({type: UPDATE_LEAGUE, league});


export type DashboardAction = InitAction | DisplayDataAction | LoadDataAction | LeagueErrorAction | UpdateLeagueAction;
