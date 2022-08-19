import 'antd/dist/antd.min.css';
import './App.css';
import { Table } from 'antd';
import { TABLE_COLUMN, generateTableData } from './constants/index.constant';

function App() {
  const tableData = generateTableData();
  return (
    <div className="App">
      <header className="App-header">
        <Table
          dataSource={tableData}
          columns={TABLE_COLUMN}
          pagination
          sticky
        ></Table>
      </header>
    </div>
  );
}

export default App;
