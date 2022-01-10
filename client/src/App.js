import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ApiList from './components/ApiList';
import ApiDetail from './components/ApiDetail';

function App() {
  console.log(process.env.REACT_APP_AIRTABLE_BASE)
  console.log(process.env.REACT_APP_AIRTABLE_KEY)
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>API-N-Dex</div>} />
        <Route path="/apis" element={<ApiList />} />
        <Route path="/apis/:id" element={<ApiDetail />}/>
        <Route path="/new" element={<div>New API</div>}/>
      </Routes>

    </div>
  );
}

export default App;
