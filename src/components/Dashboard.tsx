import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Card, Spinner, Text } from 'grommet';
import { displayData, init } from '../actions/dashboard';
import type { FunctionComponent } from 'react';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';
import Summary from './Summary';
import Trades from './Trades';


const connector = connect(
    ({dashboard: { errorMessage, loading, stats }}: RootState) => ({ errorMessage, loading, stats }), // state
    { displayData, init } // actions
);


const Dashboard: FunctionComponent<ConnectedProps<typeof connector>> = (
    { errorMessage, loading, stats, displayData, init }
) => {
    useEffect(() => {
        init(); 
    }, []);

    return (
        <>
            {
                stats && <Box fill>
                    <Summary />
                    <Trades transactions={stats} />
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
