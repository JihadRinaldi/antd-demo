import 'antd/dist/antd.min.css';
import './App.css';
import { Table } from 'antd';
import { TABLE_COLUMN, TABLE_DATA } from './constants/index.constant';
import { useState } from 'react';

function App() {
  const [selectedRow, setSelectedRow] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Table
          columns={TABLE_COLUMN}
          dataSource={TABLE_DATA}
          rowKey="id"
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: selectedRow,
            onChange: (keys) => {
              setSelectedRow(keys);
            },
            onSelect: (record) => {
              console.log(record);
            },
            getCheckboxProps: (record) => ({}),
            selections: [
              Table.SELECTION_NONE,
              Table.SELECTION_ALL,
              Table.SELECTION_INVERT,
              {
                key: 'even',
                text: 'Select Even Rows',
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    return key % 2 === 0;
                  });
                  setSelectedRow(selectedKeys);
                },
              },
              {
                key: 'excellent',
                text: 'Select Student with Excellent Grads',
                onSelect: (allkeys) => {
                  const selectedKeys = allkeys.filter((key) => {
                    const isExcellent = TABLE_DATA.find((student) => {
                      return student.key === key && student.grade.includes('A');
                    });
                    return isExcellent;
                  });
                  setSelectedRow(selectedKeys);
                },
              },
            ],
          }}
        />
      </header>
    </div>
  );
}

export default App;
