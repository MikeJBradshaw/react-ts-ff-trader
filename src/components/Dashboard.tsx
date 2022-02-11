import { useEffect } from 'react';
import { Alert } from 'antd';
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
     ({dashboard: { data, errorMessage, loading }}: RootState) => ({ data, errorMessage, loading }), // state
    { displayData, logOut, init } // actions
);


const Dashboard: FunctionComponent<ConnectedProps<typeof connector> & {user: User}> = ({
    data, errorMessage, loading, user, displayData, logOut, init
}) => {
    useEffect(() => {
        init(); 
    }, []);

    return (<>
        {data && <div>
            <Summary user={user} stats={data.userStats} logout={logOut} />
            <Trades transactions={data.stats} />
        </div>}
        {loading && <div>loading</div>}
        {errorMessage && <Alert message={errorMessage} type="error" />}
    </>);
};


export default connector(Dashboard);
