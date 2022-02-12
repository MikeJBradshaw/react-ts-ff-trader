import { Input, Button, Alert, Row, Col } from 'antd';
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
    <Row className="user-logon-form"> 
        <Col span={12} offset={6}>
            <Input
                onChange={(e) => updateUsername(e.target.value)}
                placeholder="Sleeper Name"
                value={username} />
            <Button 
                className="user-logon-button"
                type="primary"
                onClick={loadUser}
                disabled={!username}>
                    Get Me!
            </Button>
        </Col>
    </Row>
    {
        errorMessage &&
        <Row>
            <Col span={12} offset={6}>
                <Alert message="Error" description={errorMessage} type="error" showIcon />
            </Col>
        </Row>
    }
</>);


export default connector(UserLogon);
