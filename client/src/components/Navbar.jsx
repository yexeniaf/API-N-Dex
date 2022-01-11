import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark justify-content-between">
            <h1 id="siteName" >API-N-Dex</h1>
            <div>
             <button type="button" className="btn btn-warning">
                   <Link to="/">Home</Link>
             </button>    
             <button type="button" className="btn btn-warning">
                 <Link to="/apis">API List</Link>
             </button>
             <button type="button" className="btn btn-warning">
                    <Link to="/new">Add A New API</Link>
             </button>
            </div>

        </nav>
    )
}
