export interface League {
    league_id: string;
    name: string;
};


export const INIT = 'INIT_LEAGUES';
export type InitAction = {type: typeof INIT};
export const init = (): InitAction => ({type: INIT});


export const LEAGUES_ERROR = 'LEAGUES_ERROR';
export type LeaguesErrorAction = {type: typeof LEAGUES_ERROR, error: string};
export const leaguesError = (error: string) => ({type: LEAGUES_ERROR, error});


export const LEAGUES_LOADED = 'LEAGUES_LOADED';
export type LeaguesLoadedAction = {type: typeof LEAGUES_LOADED, leagues: League[]};
export const leaguesLoaded = (leagues: League[]) => ({type: LEAGUES_LOADED, leagues});


export type LeaguesAction = InitAction | LeaguesErrorAction | LeaguesLoadedAction;
