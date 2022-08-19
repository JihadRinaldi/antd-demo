import 'antd/dist/antd.min.css';
import './App.css';
import { TABLE_COLUMN } from './constants/index.constant';
import { useEffect, useState } from 'react';
import { Table } from 'antd';

function App() {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchDataTable = async () => {
      try {
        setLoading(true);
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dataToJson = await data.json();
        setTableData(dataToJson);
      } catch (Err) {
        throw new Error('Something error');
      } finally {
        setLoading(false);
      }
    };

    fetchDataTable();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Table
          loading={loading}
          columns={TABLE_COLUMN}
          dataSource={tableData}
          rowKey="id"
          pagination={{}}
        />
      </header>
    </div>
  );
}

export default App;
