import { PageHeader, Statistic, Row, Button } from 'antd';
import type { FunctionComponent } from 'react';
import type { User } from '../actions/user';


const Summary: FunctionComponent<{user: User, logout: any}> = ({
    user: { username, displayname, avatar },
    logout
}) => (
    <div>
        <PageHeader
            title={username}
            subTitle={displayname}
            avatar={{src: `https://sleepercdn.com/avatars/thumbs/${avatar}`}}
            extra={[
                <Button key="1" type="primary" onClick={logout}>Log Out</Button>
            ]}
        >
            <Row>
                <Statistic 
                    title="Total Trades"
                    value={20}
                    className="summary-statistic"
                />
                <Statistic
                    title="Balance Due"
                    prefix="$"
                    value={10.00}
                    className="summary-statistic"
                />
                <Statistic 
                    title="Balance Paid"
                    prefix="$"
                    value={0}
                    className="summary-statistic"
                />
            </Row>
        </PageHeader>
    </div>
);

export default Summary;
