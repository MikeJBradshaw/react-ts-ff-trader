import { connect } from 'react-redux';
import { Box, Button, TextInput} from 'grommet';
import { updateUsername, loadUser } from '../actions/user';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';
import type { FunctionComponent } from 'react';

const connector = connect(
    ({user: { username, errorMessage }}: RootState) => ({ username, errorMessage }), // state
    { updateUsername, loadUser } // actions
);

const UserLogon: FunctionComponent<ConnectedProps<typeof connector>> = ({
    username, updateUsername, loadUser, errorMessage
}) => (
    <Box direction="row" alignSelf="center" gap="medium" pad="25px">
        <TextInput
            onChange={(e) => updateUsername(e.target.value)}
            placeholder="Sleeper Name"
            value={username} 
        />
        <Button label="Get" onClick={loadUser} disabled={!username} />
    </Box>
    );


export default connector(UserLogon);
