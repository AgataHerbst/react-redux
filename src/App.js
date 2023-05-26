import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
 return (
    <div className="App">
      <h2>Hello Redux!!!</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Counter />
   </header>
    </div>
  );
}

export default App;
