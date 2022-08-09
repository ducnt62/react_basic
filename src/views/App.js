import './App.scss';
import MyComponent from '../components/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
