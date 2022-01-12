import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <h1 id="siteName" >API-N-Dex</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>    
                    <li className="nav-item">
                        <Link className="nav-link" to="/apis">API List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/new">Add A New API</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
