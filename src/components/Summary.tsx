import { Avatar, Box, Heading, NameValueList, NameValuePair, Text } from 'grommet';
import type { FunctionComponent } from 'react';
import type { User } from '../actions/user';
import type { UserStat } from '../actions/dashboard';


const Summary: FunctionComponent<{user: User, stats: UserStat }> = (
    {
        user: { username, display_name, avatar }, 
        stats: { trades, balance }
    }
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
                        <Text color="text-strong">{trades}</Text>
                    </NameValuePair>
                    <NameValuePair name="Balance Due">
                        <Text color="text-strong">${balance}</Text>
                    </NameValuePair>
                </NameValueList>
            </Box>
        </Box>
    )
};

export default Summary;
