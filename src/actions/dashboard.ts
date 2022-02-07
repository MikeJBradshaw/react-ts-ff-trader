import type { User } from './user';


export interface Dashboard {
    league: {
        league_id: string;
        name: string;
    };
    owners: User[];
    transactions: any[];
};


export const INIT = 'INIT';
export type InitAction = {type: typeof INIT};
export const init = (): InitAction => ({type: INIT});


export const DISPLAY_DATA = 'DISPLAY_DATA';
export type DisplayDataAction = {type: typeof DISPLAY_DATA, data: Dashboard};
export const displayData = (data: Dashboard): DisplayDataAction => ({type: DISPLAY_DATA, data});


export type DashboardAction = InitAction | DisplayDataAction;
