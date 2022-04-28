import { Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet';
import type { FunctionComponent } from 'react';
import type { UserStat } from '../actions/dashboard';


const Trades: FunctionComponent<{transactions: UserStat[]}> = ({ transactions }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell scope="col" border="bottom">
                        User
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Trades
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Balance Due
                    </TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    transactions.map(({ display_name, trades, balance }) => {
                        return (
                            <TableRow>
                                    <TableCell scope="row"><strong>{display_name}</strong></TableCell>
                                    <TableCell>{trades}</TableCell>
                                    <TableCell>${balance}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
};


export default Trades;
