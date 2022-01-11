import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <h1 id="siteName">API-N-Dex</h1>
            <button className="navButtons">
                <Link to="/">Home</Link>
            </button>    
            <button className="navButtons">
                <Link to="/apis">API List</Link>
            </button>
            <button className="navButtons">
                <Link to="/new">Add A New API</Link>
            </button>

        </nav>
    )
}
