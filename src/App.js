import 'antd/dist/antd.min.css';
import './App.css';
import { DatePicker } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DatePicker picker="quarter" />
        <DatePicker.RangePicker picker="month" />
        <DatePicker.TimePicker />
      </header>
    </div>
  );
}

export default App;
