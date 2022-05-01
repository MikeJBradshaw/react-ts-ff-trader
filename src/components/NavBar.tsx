import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Nav, Sidebar, Tip } from 'grommet';
import { Monitor, Transaction } from 'grommet-icons';
import type { FunctionComponent } from 'react';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';


const connector = connect(
    ({ user: { avatar }, dashboard: { league }}: RootState) => ({ avatar, league }),
);


const NavBar: FunctionComponent<ConnectedProps<typeof connector>> = ({ avatar, league }) => {
    const avatarUrl = `https://sleepercdn.com/avatars/${avatar}`;
    const navigate = useNavigate();

    return (
        <Sidebar gridArea="nav" background="light-2" header={<Avatar src={avatarUrl} />}>
            <Nav gap="small" justify="center">
                <Tip content="Overview" >
                    <Button 
                        hoverIndicator
                        disabled={!league}
                        icon={<Monitor />} 
                        onClick={() => navigate('/summary', { replace: true })}
                    />
                </Tip>
                <Tip content="Transactions">
                    <Button 
                        hoverIndicator
                        disabled={!league}
                        icon={<Transaction />}
                        onClick={() => navigate('/transactions', { replace: true })}
                    />
                </Tip>
            </Nav>
        </Sidebar>
    );
};


export default connector(NavBar);
