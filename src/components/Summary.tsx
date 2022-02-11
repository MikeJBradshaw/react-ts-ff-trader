import { PageHeader, Statistic, Row, Button } from 'antd';
import type { FunctionComponent } from 'react';
import type { User } from '../actions/user';
import type { UserStat } from '../actions/dashboard';


const Summary: FunctionComponent<{user: User, stats: UserStat, logout: any}> = ({
    user: { username, display_name, avatar }, stats: { trades, balance },
    logout
}) => (
    <div>
        <PageHeader
            title={username}
            subTitle={display_name}
            avatar={{src: `https://sleepercdn.com/avatars/thumbs/${avatar}`}}
            extra={[
                <Button key="1" type="primary" onClick={logout}>Log Out</Button>
            ]}
        >
            <Row>
                <Statistic 
                    title="Total Trades"
                    value={trades}
                    className="summary-statistic"
                />
                <Statistic
                    title="Balance Due"
                    prefix="$"
                    value={balance}
                    className="summary-statistic"
                />
            </Row>
        </PageHeader>
    </div>
);

export default Summary;
