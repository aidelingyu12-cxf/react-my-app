import React, { useState } from 'react';
import { Table } from 'antd';
import { createStyles } from 'antd-style';
import { Input, Button } from 'antd';
import "./index.css"
const { Search } = Input;
const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});
const columns = [
  {
    title: 'ID',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Name',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Email',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Phone',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Status',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Create time',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Option',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const dataSource = Array.from({ length: 100 }).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
const App = () => {
  const [selectionType] = useState('checkbox');
  const { styles } = useStyle();
  return (
    <div>
      <div className='search-bar'>
        <Input className='role-search' placeholder="Basic usage" />
        <Button className='search-bar-child' type="primary">Primary Button</Button>
        <Button className='search-bar-child' type="primary">Primary Button</Button>
        <Button className='search-bar-child' type="primary">Primary Button</Button>
      </div>

      <Table
        bordered
        rowSelection={Object.assign({ type: selectionType }, rowSelection)}
        className={styles.customTable}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 'max-content', y: 70 * 5 }}
      />
    </div>
  );
};
export default App;