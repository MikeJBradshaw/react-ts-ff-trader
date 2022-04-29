import { connect } from 'react-redux';
import { Box, Card, Spinner, Text } from 'grommet';
import { displayData, init } from '../actions/dashboard';
import type { FunctionComponent } from 'react';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';
import Summary from './Summary';
import Trades from './Trades';


const connector = connect(
    ({dashboard: { errorMessage, league, loading, stats }}: RootState) => ({ errorMessage, league, loading, stats }), // state
    { displayData, init } // actions
);


const Dashboard: FunctionComponent<ConnectedProps<typeof connector>> = (
    { errorMessage, league, loading, stats, displayData, init }
) => {
    if (loading) {
        return (
            <Box direction="row" justify="center">
                <Spinner />
            </Box>
        );
    }
    
    if (!league) {
        return (
            <Box direction="row" justify="center">
                <Text> Select a League</Text>
            </Box>
        );
    }

    return (
        <>
            {
                stats && <Box fill>
                    <Summary />
                    <Trades transactions={stats} />
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
