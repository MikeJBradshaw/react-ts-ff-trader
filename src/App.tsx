import { connect } from 'react-redux';
import { Box, Button, Grid, Grommet, Text } from 'grommet';
import { Routes, Route } from 'react-router-dom';
import { logOut } from './actions/user';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from './store';
import type { FunctionComponent } from 'react';
import Logon from './components/Logon';
import Dashboard from './components/Dashboard';
import Leagues from './components/Leagues';
import './App.css';


const connector = connect(({user: { user_id }}: RootState) => ({ user_id}), { logOut });


const App: FunctionComponent<ConnectedProps<typeof connector>> = ({ user_id, logOut }) => (
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
                <Box direction="column" justify="center">
                    {user_id && <Leagues />}
                </Box>
                <Box direction="column" justify="center">
                    <Text alignSelf="center">Trade Monitor</Text>
                </Box>
                <Box alignSelf="center">
                    {user_id && <Button label="Log Out" onClick={() => logOut()} />}
                </Box> 
            </Box>
            <Box gridArea="main" fill gap="small">
                <Routes>
                    {!user_id && 
                        <Route path="/" element={<Logon />} />
                    }
                    {user_id &&
                        <Route path="/" element={<Dashboard />} />
                    }
                </Routes>
            </Box>
        </Grid>
    </Grommet>
);


export default connector(App);
