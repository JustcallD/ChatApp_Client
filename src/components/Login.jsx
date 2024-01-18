// import  { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();
//   console.log(email);
//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(" http://localhost:4000/login", {
//         email,
//       });

//       console.log(response.data);

//       const { userId } = response.data;

//       // Save the token in localStorage for future requests
//       localStorage.setItem("user_id", userId);
//       navigate("/list");
//     } catch (error) {
//       console.error("Login error:", error);
//       // Handle login error (show error message, etc.)
//     }
//   };
//   return (
//     <div>
//       <h2>Login</h2>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`https://chatappbackendservice-w8ct.onrender.com/login`, {
        email,
      });

      const { userId } = response.data;

      // Save the token in localStorage for future requests
      localStorage.setItem("user_id", userId);
      navigate("/list");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (show error message, etc.)
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button onClick={handleLogin} style={buttonStyle}>
        Login
      </button>
    </div>
  );
};

// Internal styles
const containerStyle = {
  maxWidth: "400px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  textAlign: "center",
  color: "#333",
};

const inputContainerStyle = {
  marginBottom: "15px",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const buttonStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Login;
