import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>API-N-Dex</div>} />
        <Route path="/apis" element={<div>API List</div>} />
        <Route path="/apis/:id" element={<div>API Details</div>}/>
        <Route path="/new" element={<div>New API</div>}/>
      </Routes>

    </div>
  );
}

export default App;
