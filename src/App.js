import 'antd/dist/antd.min.css';
import './App.css';
import { Button, Input, Form, message, Alert } from 'antd';
import { useState } from 'react';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const onFinish = (e) => {
    console.log(e);
    setTimeout(() => {
      message.error('Login Error');
      setShowAlert(true);
    }, 2000);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {showAlert && (
            <Alert
              type="error"
              description="There was an Error on login"
              closable
            />
          )}
        </div>
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
