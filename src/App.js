import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@wework/ray2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button size="large"
        >
          Learn React
        </Button>
        <TextField />
      </header>
    </div>
  );
}

export default App;
