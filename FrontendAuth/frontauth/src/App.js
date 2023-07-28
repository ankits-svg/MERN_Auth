import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Allroutes from './Component/Allroutes';

function App() {
  return (
    <div className="App">
      <h1>MERN Authentication</h1>
      <Navbar/>
      <Allroutes/>
    </div>
  );
}

export default App;
