import { Table } from 'antd';
import type { FunctionComponent } from 'react';
import type { UserStat } from '../actions/dashboard';


const columns: any[] = [
    {title: 'Name', dataIndex: 'display_name', key: 'display_name'},
    {title: 'Trades', dataIndex: 'trades', key: 'trades'},
    {title: 'Balance Due', dataIndex: 'balance', key: 'balance'},
];


const Trades: FunctionComponent<{transactions: UserStat[]}> = ({ transactions }) => {
    // create the table data
    return (
        <div>
            <Table 
                rowKey="user_id"
                columns={columns}
                dataSource={transactions}
                pagination={false}
            />
        </div>
    )
};


export default Trades;
