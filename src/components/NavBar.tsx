import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Avatar, Button, Nav, Sidebar, Tip } from 'grommet';
import { Monitor, Transaction } from 'grommet-icons';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';


const connector = connect(
      ({ user: { avatar }, dashboard: { league }}: RootState) => ({ avatar, league }),
);


const NavBar: FunctionComponent<ConnectedProps<typeof connector>> = ({ avatar, league }) => {
    const avatarUrl = `https://sleepercdn.com/avatars/${avatar}`;

    return (
        <Sidebar gridArea="nav" background="light-2" header={<Avatar src={avatarUrl} />}>
            <Nav gap="small" justify="center">
                <Tip content="Overview" >
                    <Button disabled={!league} icon={<Monitor />} hoverIndicator />
                </Tip>
                <Tip content="Transactions">
                    <Button disabled={!league} icon={<Transaction />} hoverIndicator />
                </Tip>
            </Nav>
        </Sidebar>
    );
};


export default connector(NavBar);
