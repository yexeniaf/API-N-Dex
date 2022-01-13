import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to="/" style={{textDecoration: 'none'}}>
            <h1 id="siteName">API-N-Dex</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" style={{marginLeft: '100px', fontWeight: '700'}}>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>    
                    <li className="nav-item" style={{marginLeft: '70px', fontWeight: '700'}}>
                        <Link className="nav-link" to="/apis">API List</Link>
                    </li>
                    <li className="nav-item" style={{marginLeft: '70px', fontWeight: '700'}}>
                        <Link className="nav-link" to="/new">Add A New API</Link>
                    </li>
                </ul>
                <form className="search-form" style={{marginLeft: '400px'}}>
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-light" type="submit" style={{marginLeft:'5px', color: 'salmon'}} >Search</button>
            </form>
            </div>
            

        </nav>
    )
}
