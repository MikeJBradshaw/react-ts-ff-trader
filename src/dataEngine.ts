import type { User } from './actions/user';


// this function will get he user information from the sleeper API
export const fetchUser = async (username: string): Promise<User> => {
    const user: User = await fetch(
        `https://api.sleeper.app/v1/user/${username}`
    ).then(res => res.json());
    console.log('user: ', user);
    return user;
};

export const fetchUserLeagues = async (userId: string) => {
    // const leaguesData: string = await fetch(
    //     `https://api.sleeper.app/v1/user/${
    //         userId
    //     }>/leagues/nfl/2022`
    // )
};

export const fetchLeague = async (leagueId: string) => {

}
