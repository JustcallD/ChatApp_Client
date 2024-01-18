import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    background: "#eee",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    padding: "5px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/login" style={linkStyle}>
        Login
      </Link>
      <Link to="/list" style={linkStyle}>
        Chat List
      </Link>
      <Link to="/addfriend" style={linkStyle}>
        add friend
      </Link>
    </nav>
  );
};

export default Navbar;
