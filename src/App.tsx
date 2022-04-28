import { connect } from 'react-redux';
import { Box, Button, Grid, Grommet, Text } from 'grommet';
import { logOut } from './actions/user';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from './store';
import type { FunctionComponent } from 'react';
import Logon from './components/Logon';
import Dashboard from './components/Dashboard';
import './App.css';


const connector = connect(({user: { user }}: RootState) => ({ user}), { logOut });


const App: FunctionComponent<ConnectedProps<typeof connector>> = ({ user, logOut }) => (
    <Grommet className="app">
        <Grid
            fill
            rows={['55px', 'auto']}
            columns={['auto']}
            areas={[
                { name: 'header', start: [0, 0], end: [1, 0] },
                { name: 'main', start: [0, 1], end: [1, 1] },
            ]}
        >
            <Box gridArea="header" background="brand" justify="between" direction="row" pad="small" fill>
                <Box />
                <Box direction="column" justify="center">
                    <Text alignSelf="center">Trade Monitor</Text>
                </Box>
                <Box alignSelf="center">
                    {user && <Button label="logout" onClick={() => logOut()} />}
                </Box> 
            </Box>
            <Box gridArea="main" fill gap="small">
                {!user && <Logon />}
                {user && <Dashboard user={user} />}
            </Box>
        </Grid>
    </Grommet>
);


export default connector(App);
