import 'antd/dist/antd.min.css';
import './App.css';
import { Spin, Button } from 'antd';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Spin spinning={loading} />
        <Button
          onClick={() => {
            setLoading((prevState) => !prevState);
          }}
        >
          Trigger Loading
        </Button>
        <Spin spinning={loading}>
          {loading ? 'Fetching Data' : 'Data1 Data2 Data3'}
        </Spin>
      </header>
    </div>
  );
}

export default App;
