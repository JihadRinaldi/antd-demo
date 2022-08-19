import 'antd/dist/antd.min.css';
import './App.css';

import { Button, Divider } from 'antd';
import {
  PieChartFilled,
  AppleFilled,
  LoadingOutlined,
  BankTwoTone,
  LogoutOutlined,
} from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PieChartFilled style={{ color: 'purple', fontSize: 100 }} />
          <AppleFilled style={{ color: 'green', fontSize: 100 }} />
          <LoadingOutlined style={{ color: 'red', fontSize: 100 }} />
          <PieChartFilled
            style={{ color: 'orange', fontSize: 100 }}
            rotate={45}
          />
          <BankTwoTone
            twoToneColor="green"
            style={{ fontSize: 100 }}
          />
          <Divider />
          <Button
            icon={<LogoutOutlined style={{ color: 'green', fontSize: 14 }} />}
          >
            Button With Custom Icon
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
