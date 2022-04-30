import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Avatar, Sidebar } from 'grommet';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';


const connector = connect(
    ({ user: { avatar }}: RootState) => ({ avatar }),
);


const NavBar: FunctionComponent<ConnectedProps<typeof connector>> = ({ avatar }) => {
    const avatarUrl = `https://sleepercdn.com/avatars/${avatar}`;

    return (
        <Sidebar gridArea="nav" background="light-2">
            <Avatar src={avatarUrl} />
        </Sidebar>
    );
};


export default connector(NavBar);
