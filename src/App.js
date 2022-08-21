import 'antd/dist/antd.min.css';
import './App.css';
import { useState } from 'react';
import { TABLE_DATA } from './constants/index.constant';
import { Table, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function App() {
  const [dataSource, setDataSource] = useState(TABLE_DATA);
  const TABLE_COLUMN = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: '4',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: '5',
      title: 'Actions',
      render: (record) => {
        return (
          <>
            <EditOutlined />
            <DeleteOutlined
              onClick={() => onDeleteStudent(record)}
              style={{ color: 'red', marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = Math.random() * 1000;
    const newStudent = {
      id: randomNumber,
      name: `Name ${randomNumber}`,
      email: `${randomNumber} @gmail.com`,
      address: `Address ${randomNumber}`,
    };
    setDataSource((prevData) => {
      return [...prevData, newStudent];
    });
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: 'Are you sure want to delete this student record?',
      onOk: () => {
        setDataSource((prevData) => {
          return prevData.filter((student) => student.id !== record.id);
        });
      },
      okType: 'danger',
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Table
          columns={TABLE_COLUMN}
          dataSource={dataSource}
          rowKey="id"
        ></Table>
      </header>
    </div>
  );
}

export default App;
