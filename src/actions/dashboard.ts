import type { User } from './user';


export interface Transaction {
    creator: string;
    status: string;
    type: string;
};


export interface UserStat {
    user_id: string;
    trades: number;
    balance: number;
    avatar: string;
    display_name: string;
};


export interface DashboardData {
    owners: User[];
    userStats: UserStat;
    stats: UserStat[];
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


export type DashboardAction = InitAction | DisplayDataAction | LoadDataAction | LeagueErrorAction;