import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Menu, Text } from 'grommet';
import { init } from '../actions/leagues';
import { updateLeague } from '../actions/dashboard';
import type { FunctionComponent } from 'react';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';


const connector = connect(
    ({
        leagues: { leagues, error, loading },
        dashboard: { league }
    }: RootState) => ({ leagues, error, loading, league }),
    { init, updateLeague }
);


const Leagues: FunctionComponent<ConnectedProps<typeof connector>> = ({ leagues, error, loading, league, init, updateLeague }) => {
    useEffect(() => {
        init();
    }, []);

    if (error) {
        return (<div>{error}</div>);
    }

    if (loading) {
        return (<div>LOADING.....</div>);
    }

    return (
        <Menu
            label={ league ? league.name : 'Leagues' }
            items={leagues.map(({ name, league_id }) => ({'label': name, onClick: () => updateLeague({name, league_id})}))}
        />
    );
};


export default connector(Leagues);
