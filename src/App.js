import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiPrimerComponente/>
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Hola Mundo</h4>
        <h5>Hola Mundo</h5>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
