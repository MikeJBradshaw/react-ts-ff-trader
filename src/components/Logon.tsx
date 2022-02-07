import { Form, Input, Button } from 'antd';
import { updateUsername, updateUser } from '../actions/user';
import { fetchUser } from '../dataEngine';
import { connect } from 'react-redux';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';
import type { FunctionComponent } from 'react';

const connector = connect(
    ({user: { username }}: RootState) => ({ username }), // state
    { updateUsername, updateUser } // actions
);

const UserLogon: FunctionComponent<ConnectedProps<typeof connector>> = ({
    username, updateUsername, updateUser
}) => (
    <div className="user-logon-form">
        <Form.Item label="Username">
            <Input onChange={(e) => updateUsername(e.target.value)} value={username} />
        </Form.Item>
        <Button type="primary" onClick={async () => updateUser(await fetchUser(username))}>
            Get Me!
        </Button>
    </div>
);


export default connector(UserLogon);
