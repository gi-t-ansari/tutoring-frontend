import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-wrapper">
      <h1 className="title">Q Trip</h1>
      <Link to="/">
        <span className="nav-link">Home</span>
      </Link>
    </header>
  );
};

export default Header;
