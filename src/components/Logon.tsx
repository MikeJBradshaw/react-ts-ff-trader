import { Form, Input, Button, Alert } from 'antd';
import { updateUsername, loadUser } from '../actions/user';
import { connect } from 'react-redux';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';
import type { FunctionComponent } from 'react';

const connector = connect(
    ({user: { username, errorMessage }}: RootState) => ({ username, errorMessage }), // state
    { updateUsername, loadUser } // actions
);

const UserLogon: FunctionComponent<ConnectedProps<typeof connector>> = ({
    username, updateUsername, loadUser, errorMessage
}) => (<>
    <div className="user-logon-form">
        <Form.Item label="Username">
            <Input onChange={(e) => updateUsername(e.target.value)} value={username} />
        </Form.Item>
        <Button type="primary" onClick={loadUser}>
            Get Me!
        </Button>
    </div>
    {errorMessage && <Alert message={errorMessage} type="error" />}
</>);


export default connector(UserLogon);
