import { connect } from 'react-redux';
import Logon from './components/Logon';
import Dashboard from './components/Dashboard';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from './store';
import type { FunctionComponent } from 'react';
import './App.css';


const connector = connect(({user: { user }}: RootState) => ({ user }));


const App: FunctionComponent<ConnectedProps<typeof connector>> = ({ user }) => (
    <div className="App">
        {!user && <Logon />}
        {user && <Dashboard user={user} />}
    </div>
);


export default connector(App);
