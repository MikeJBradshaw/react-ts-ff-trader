import { Table } from 'antd';
import type { FunctionComponent } from 'react';


const columns: any[] = [
    {title: 'Name', dataIndex: 'name', key: 'name'},
    {title: 'Trades', dataIndex: 'trades', key: 'trades'},
    {title: 'Amount Due', dataIndex: 'due', key: 'due'},
    {title: 'Amount Paid', dataIndex: 'paid', key: 'paid'}
];


const data: any[] = [
  {key: '1', name: 'John Brown', trades: 32, due: '$30.00', paid: '$10.00'},
  {key: '2', name: 'John Black', trades: 16, due: '$50.00', paid: '$1.00'},
  {key: '3', name: 'John White', trades: 148, due: '$130.00', paid: '$0.00'}
];


const Trades: FunctionComponent = () => (
    <div>
        <Table columns={columns} dataSource={data} pagination={false} />
    </div>
);


export default Trades;
