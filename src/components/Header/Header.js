import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
                <Link to="/game" style={{color: "black", textDecoration: "none", fontWeight: "bold"}}>
                    <h1>Type Racer</h1>
                </Link>
            <Link to="/game/previous-games" style={{color: "black"}}>Previous Games</Link>
        </div>
    )
}

export default Header;