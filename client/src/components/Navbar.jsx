import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <Link to="/">
                <h1>API-N-Dex</h1>
            </Link>
            <button>
                <Link to="/apis">API List</Link>
            </button>
            <button>
                <Link to="/new">Add A New API</Link>
            </button>

        </div>
    )
}
