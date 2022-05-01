import { connect } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from 'grommet';
import type { ConnectedProps } from 'react-redux';
import type { FunctionComponent } from 'react';
import type { RootState } from '../store';
import Logon from './Logon';
import Dashboard from './Dashboard';
import Transactions from './Transactions';


const connector = connect(
    ({user: { user_id }, dashboard: { league }}: RootState) => ({ user_id, league }),
    {}
);


const AppRoutes: FunctionComponent<ConnectedProps<typeof connector>> = ({ user_id, league }) => {
    if (!user_id) {
        return (
            <Box gridArea="main" fill gap="small">
                <Routes>
                    <Route path="" element={<Logon />} />
                    <Route path="*" element={<Navigate to="" replace={true} />} />
                </Routes>
            </Box>
        );
    }

    return (
        <Box gridArea="main" fill gap="small">
            <Routes>
                <Route path="/summary" element={<Dashboard />}/ >
                <Route path="/transactions" element={<Transactions />}/ >
                <Route path="*" element={<Navigate to="/leagues" replace={true} />} />
            </Routes>
        </Box>
    );
};


export default connector(AppRoutes);
