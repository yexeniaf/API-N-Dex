import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ApiList from './components/ApiList';
import ApiDetail from './components/ApiDetail';
import NewApi from './components/NewApi';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  // console.log(process.env.REACT_APP_AIRTABLE_BASE)
  // console.log(process.env.REACT_APP_AIRTABLE_KEY)
 
  return (
    <div className="App" style={{ 
      backgroundImage: `url("https://developers.giphy.com/branch/master/static/api-512d36c09662682717108a38bbb5c57d.gif")` 
    }} >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apis" element={<ApiList />} />
        <Route path="/apis/:id" element={<ApiDetail />}/>
        <Route path="/new" element={<NewApi />}/>
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
