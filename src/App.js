import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter/Counter';
import Todos from './components/ToDos/Todos';

function App() {


  const listItems = [
    {task: 'create lesson', done: false},
    {task: 'clean apartment', done: false}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <HelloWorld name="Kyle"/>
      <div className="testing-container">
        <Counter />
        <Todos tasks={listItems}/>
      </div>
      </header>
    </div>
  );
}

export default App;
