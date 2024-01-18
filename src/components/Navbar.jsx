import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    background: "#333",
    color: "#fff",
    borderBottom: "1px solid #555",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    padding: "10px",
    borderRadius: "4px",
    transition: "background 0.3s",
  };

  const activeLinkStyle = {
    background: "#555",
  };

  const location = useLocation();

  return (
    <nav style={navStyle}>
      <Link
        to="/login"
        style={{
          ...linkStyle,
          ...(location.pathname === "/login" && activeLinkStyle),
        }}
      >
        Login
      </Link>
      <Link
        to="/list"
        style={{
          ...linkStyle,
          ...(location.pathname === "/list" && activeLinkStyle),
        }}
      >
        Chat List
      </Link>
      <Link
        to="/addfriend"
        style={{
          ...linkStyle,
          ...(location.pathname === "/addfriend" && activeLinkStyle),
        }}
      >
        Add Friend
      </Link>
    </nav>
  );
};

export default Navbar;
