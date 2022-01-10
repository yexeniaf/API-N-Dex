import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <nav>THIS WILL BE A NAVBAR</nav>
      <Routes>
        <Route path="/" element={<div>API-N-Dex</div>} />
        <Route />
        <Route />
        <Route />
      </Routes>

    </div>
  );
}

export default App;
