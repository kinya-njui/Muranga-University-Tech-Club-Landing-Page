import "./header.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav-bar">
      <h3 className="header-tittle">MUTC</h3>
      <nav>
        <ol className="navigationlist">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/Leadership">Leadership</Link>
          </li>
          <li>
            <Link to="/Tracks">Track</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

function Header() {
  return <Navigation />;
}

export default Header;
