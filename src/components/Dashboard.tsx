import { useEffect } from 'react';
import Summary from './Summary';
import Trades from './Trades';
import { displayData, init } from '../actions/dashboard';
import { logOut } from '../actions/user';
import { connect } from 'react-redux';
import type { ConnectedProps } from 'react-redux';
import type { User } from '../actions/user';
import type { RootState } from '../store';
import type { FunctionComponent } from 'react';


const connector = connect(
     ({dashboard: { data }}: RootState) => ({ data }), // state
    { displayData, logOut, init } // actions
);


const Dashboard: FunctionComponent<ConnectedProps<typeof connector> & {user: User}> = ({
    data, user, displayData, logOut, init
}) => {
    useEffect(() => {
        init(); 
    }, []);

    return (
        <div>
            <Summary user={user} logout={logOut} />
            <Trades />
        </div>
    );
};


export default connector(Dashboard);
