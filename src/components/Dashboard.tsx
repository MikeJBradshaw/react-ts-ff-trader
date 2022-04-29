import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Card, Spinner, Text } from 'grommet';
import { displayData, init } from '../actions/dashboard';
import type { FunctionComponent } from 'react';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';
import type { User } from '../actions/user';
import Summary from './Summary';
import Trades from './Trades';


const connector = connect(
    ({dashboard: { data, errorMessage, loading }}: RootState) => ({ data, errorMessage, loading }), // state
    { displayData, init } // actions
);


const Dashboard: FunctionComponent<ConnectedProps<typeof connector> & {user: User}> = (
    { data, errorMessage, loading, user, displayData, init }
) => {
    useEffect(() => {
        init(); 
    }, []);

    return (
        <>
            {
                data && <Box fill>
                    <Summary user={user} stats={data.userStats} />
                    <Trades transactions={data.stats} />
                </Box>
            }
            {
                loading && <Box direction="row" justify="center">
                    <Spinner />
                </Box>
            }
            {
                errorMessage && <Card background="red" justify="center">
                    <Text>{errorMessage}</Text>
                </Card>
            }
        </>
    );
};


export default connector(Dashboard);
