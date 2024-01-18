// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-around",
//     padding: "10px",
//     background: "#333",
//     color: "#fff",
//     borderBottom: "1px solid #555",
//   };

//   const linkStyle = {
//     textDecoration: "none",
//     color: "#fff",
//     padding: "10px",
//     borderRadius: "4px",
//     transition: "background 0.3s",
//   };

//   const activeLinkStyle = {
//     background: "#555",
//   };

//   const location = useLocation();

//   return (
//     <nav style={navStyle}>
//       <Link
//         to="/login"
//         style={{
//           ...linkStyle,
//           ...(location.pathname === "/login" && activeLinkStyle),
//         }}
//       >
//         Login
//       </Link>
//       <Link
//         to="/register"
//         style={{
//           ...linkStyle,
//           ...(location.pathname === "/register" && activeLinkStyle),
//         }}
//       >
//         Add Friend
//       </Link>
//       <Link
//         to="/list"
//         style={{
//           ...linkStyle,
//           ...(location.pathname === "/list" && activeLinkStyle),
//         }}
//       >
//         Chat List
//       </Link>
//       <Link
//         to="/addfriend"
//         style={{
//           ...linkStyle,
//           ...(location.pathname === "/addfriend" && activeLinkStyle),
//         }}
//       >
//         Add Friend
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    background: "#333",
    color: "#fff",
    borderBottom: "1px solid #555",
  };

  const linkContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: isMobileMenuOpen ? "100%" : "70%",
    transition: "width 0.3s",
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

  const mobileMenuIconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    display: "none",
  };

  const mobileMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    background: "#333",
    zIndex: 1,
  };

  if (isMobileMenuOpen) {
    mobileMenuIconStyle.display = "block";
  }

  return (
    <nav style={navStyle}>
      <div style={linkContainerStyle}>
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
          to="/register"
          style={{
            ...linkStyle,
            ...(location.pathname === "/register" && activeLinkStyle),
          }}
        >
          Register
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
      </div>

      <i
        className={`fas fa-bars`}
        style={mobileMenuIconStyle}
        onClick={toggleMobileMenu}
      />

      {isMobileMenuOpen && (
        <div style={mobileMenuStyle}>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
          <Link to="/register" style={linkStyle}>
            Register
          </Link>
          <Link to="/list" style={linkStyle}>
            Chat List
          </Link>
          <Link to="/addfriend" style={linkStyle}>
            Add Friend
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
