import { useEffect } from 'react';
import { Alert } from 'antd';
import Summary from './Summary';
import Trades from './Trades';
import { displayData, init, DashboardData } from '../actions/dashboard';
import { logOut } from '../actions/user';
import { connect } from 'react-redux';
import type { ConnectedProps } from 'react-redux';
import type { User } from '../actions/user';
import type { RootState } from '../store';
import type { FunctionComponent } from 'react';


const connector = connect(
     ({dashboard: { data, errorMessage }}: RootState) => ({ data, errorMessage }), // state
    { displayData, logOut, init } // actions
);


const Dashboard: FunctionComponent<ConnectedProps<typeof connector> & {user: User}> = ({
    data, errorMessage, user, displayData, logOut, init
}) => {
    useEffect(() => {
        init(); 
    }, []);

    return (<>
        <div>
            <Summary user={user} transactions={(data as DashboardData).transactions.filter((n) => {return n.creator === user.user_id})} logout={logOut} />
            <Trades owners={(data as DashboardData).owners} transactions={(data as DashboardData).transactions} />
        </div>
        {errorMessage && <Alert message={errorMessage} type="error" />}
    </>);
};


export default connector(Dashboard);
