import 'antd/dist/antd.min.css';
import './App.css';
import { Progress } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Progress
          percent={45}
          type="line"
        />
        <Progress
          percent={45}
          type="line"
          strokeColor="red"
        />
        <Progress
          percent={45}
          type="circle"
          status="normal"
        />
        <Progress
          percent={45}
          type="circle"
          status="success"
        />
        <Progress
          percent={45}
          type="circle"
          status="exception"
        />
        <Progress
          percent={45}
          type="line"
          status="success"
        />
        <Progress
          percent={45}
          type="line"
          status="success"
          steps={3}
        />
      </header>
    </div>
  );
}

export default App;
