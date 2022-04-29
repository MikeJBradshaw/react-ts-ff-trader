import { Avatar, Box, Heading, NameValueList, NameValuePair, Text } from 'grommet';
import { connect } from 'react-redux';
import type { FunctionComponent } from 'react';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../store';


const connector = connect(
    ({
        user: { avatar, display_name, username },
        dashboard: { userStats, stats }
    }: RootState) => ({ avatar, display_name, username, userStats, stats })
);

const Summary: FunctionComponent<ConnectedProps<typeof connector>> = (
    { avatar, display_name, username, userStats, stats }
) => {
    const avatarStr = `https://sleepercdn.com/avatars/thumbs/${avatar}`;

    return (
        <Box pad={{'bottom': '25px', 'left': '10px'}} background="light-1">
            <Box direction="row" gap="small" justify="start" align="center">
                <Avatar src={avatarStr} />
                <Heading>{username}</Heading>
                <Text color="dark-6">{display_name}</Text>
            </Box>
            <Box width="medium" direction="row" margin={{"left": "60px"}}>
                <NameValueList layout="column">
                    <NameValuePair name="Trades">
                        <Text color="text-strong">{userStats?.trades}</Text>
                    </NameValuePair>
                    <NameValuePair name="Balance Due">
                        <Text color="text-strong">${userStats?.balance}</Text>
                    </NameValuePair>
                </NameValueList>
            </Box>
        </Box>
    )
};

export default connector(Summary);
