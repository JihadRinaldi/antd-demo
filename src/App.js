import 'antd/dist/antd.min.css';
import './App.css';
import { Button, Input, Form } from 'antd';

function App() {
  const onFinish = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
          >
            <Input
              placeholder="Username"
              maxLength={30}
              allowClear
              required
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
          >
            <Input.Password
              placeholder="Password"
              maxLength={30}
              allowClear
              required
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
