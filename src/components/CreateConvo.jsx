// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreateConvo = () => {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const handleAddFriend = async () => {
//     try {
//       const response = await axios.post(
//         `https://chatappbackendservice-w8ct.onrender.com/connection`,
//         {
//           email,
//         }
//       );

//       const { userId } = response.data;

//       // Save the token in localStorage for future requests

//       navigate("/list");
//     } catch (error) {
//       console.error("Login error:", error);
//       // Handle login error (show error message, etc.)
//     }
//   };
//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>addFriend</h2>
//       <div style={inputContainerStyle}>
//         <label style={labelStyle}>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={inputStyle}
//         />
//       </div>
//       <button onClick={handleLogin} style={buttonStyle}>
//         add friend
//       </button>
//     </div>
//   );
// };

// export default CreateConvo;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateConvo = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");

  const handleAddFriend = async () => {
    try {
      const response = await axios.post(
        `https://chatappbackendservice-w8ct.onrender.com/connection`,
        {
          userId,
          email,
        }
      );

      // Handle the response based on your data structure
      const { data } = response;
      console.log("Connection data:", data);

      // Navigate to the desired route
      navigate("/list");
    } catch (error) {
      console.error("Add friend error:", error);
      setError("Error Creating conversations. Please try again.");
      // Handle the error (show error message, etc.)
    }
  };

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

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Add Friend</h2>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button onClick={handleAddFriend} style={buttonStyle}>
        Add Friend
      </button>
      <p>{error}</p>
    </div>
  );
};

export default CreateConvo;
