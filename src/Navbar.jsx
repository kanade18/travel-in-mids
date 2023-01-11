import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar">
      <ul className="navbar_list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/searchengine">Search Engine</Link>
          </li>
        )}
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/our_services">Our Services</Link>
        </li>
        <li>
          <Link to="/ourteam">Our Team</Link>
        </li>
        <li>
          {!isLoggedIn && <Link to="/login_or_signup">Log in/Sign Up</Link>}
          {isLoggedIn && <Link to="/login_or_signup">Log Out</Link>}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
