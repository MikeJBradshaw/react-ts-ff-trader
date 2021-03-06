import { connect } from 'react-redux';
import { Grid, Grommet } from 'grommet';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from './store';
import type { FunctionComponent } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AppRoutes from './components/AppRoutes';
import './App.css';


const connector = connect(({user: { user_id }}: RootState) => ({ user_id }));


const App: FunctionComponent<ConnectedProps<typeof connector>> = ({ user_id }) => (
    <Grommet className="app">
        <Grid
            fill
            rows={['55px', 'auto']}
            columns={['75px', 'auto']}
            gap="small"
            areas={[
                { name: 'header', start: [0, 0], end: [1, 0] },
                { name: 'nav', start: [0, 1], end: [0, 1] },
                { name: 'main', start: [1, 1], end: [1, 1] },
            ]}
        >
            <Header />
            { user_id && <NavBar /> }
            <AppRoutes />
        </Grid>
    </Grommet>
);


export default connector(App);
