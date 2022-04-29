import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'grommet';
import { init } from '../actions/leagues';
import type { FunctionComponent } from 'react';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';


const connector = connect(
    ({leagues: { leagues, error, loading }}: RootState) => ({ leagues, error, loading }),
    { init }
);


const Leagues: FunctionComponent<ConnectedProps<typeof connector>> = ({ leagues, error, loading, init }) => {
    useEffect(() => {
        init();
    }, []);

    const [value, setValue] = useState<string>('');

    if (error) {
        return (<div>{error}</div>);
    }

    if (loading) {
        return (<div>LOADING.....</div>);
    }

    return (
        <Menu
            label="Leagues"
            items={leagues.map(({ name, league_id }) => ({'label': name, onClick: () => console.log(league_id)}))}
        />
    );
};


export default connector(Leagues);
