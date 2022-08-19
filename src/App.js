import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';

export default function App() {
  return (
        <div>
        <img src={logo} className="App-logo" alt="logo"/>
        <NavBar/>
        <h1>Working</h1>
        </div>
  );
}