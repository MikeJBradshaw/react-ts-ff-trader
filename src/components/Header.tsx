import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Box, Button, Text } from 'grommet';
import { RootState } from '../store';
import { logOut } from '../actions/user';
import type { ConnectedProps } from 'react-redux';
import Leagues from './Leagues';


const connector = connect(
    ({ user: { user_id }}: RootState) => ({ user_id }),
    { logOut }
);


const Header: FunctionComponent<ConnectedProps<typeof connector>> = ({ user_id, logOut }) => {
    return (
        <Box gridArea="header" background="brand" justify="between" direction="row" pad="small" fill>
            <Box direction="column" justify="center">
                {user_id && <Leagues />}
            </Box>
            <Box direction="column" justify="center">
                {!user_id && <Text alignSelf="center" size="30px">Trade Monitor</Text>}
            </Box>
            <Box alignSelf="center">
                {user_id && <Button label="Log Out" onClick={() => logOut()} />}
            </Box> 
        </Box>
    );
};


export default connector(Header);
