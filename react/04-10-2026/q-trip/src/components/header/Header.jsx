import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  // console.log(
  //   "pathname -->",
  //   pathname.includes("login") || pathname.includes("register"),
  // );

  return (
    <header className="header-wrapper">
      <h1 className="title">Q Trip</h1>

      <div className="right">
        {/* checking current page/path and showing Home accordingly */}
        {pathname.includes("login") || pathname.includes("register") ? null : (
          <Link to="/" className="nav-link">
            Home
          </Link>
        )}
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
        <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
