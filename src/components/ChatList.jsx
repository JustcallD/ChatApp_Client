// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const ChatList = () => {
//   const [conversations, setConversations] = useState([]);
//   const [error, setError] = useState(null);
//   const id = localStorage.getItem("user_id");

//   useEffect(() => {
//     const fetchConversations = async () => {
//       try {
//         console.log("user", id);
//         const response = await axios.get(
//           `http://localhost:4000/connections/${id}`
//           //   `http://localhost:4500/connections/65a66dd80b3e59c8e84ad5bd`
//         );
//         console.log(response.data.connections);
//         localStorage.setItem("userList", response.data.connections);
//         setConversations(response.data.connections);
//       } catch (error) {
//         console.error("Error fetching conversations:", error);
//         setError("Error fetching conversations. Please try again.");
//       }
//     };

//     fetchConversations();
//   }, [id]);

//   return (
//     <div>
//       <h2>Chat List</h2>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       <ul>
//         {conversations.map((conversation, i) => (
//           <li key={i}>
//             <Link to={`/${id}/${conversation._id}`}>{conversation.email}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ChatList;

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ChatList = () => {
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState(null);
  const id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/connections/${id}`
        );
        localStorage.setItem("userList", response.data.connections);
        setConversations(response.data.connections);
      } catch (error) {
        console.error("Error fetching conversations:", error);
        setError("Error fetching conversations. Please try again.");
      }
    };

    fetchConversations();
  }, [id]);

  const containerStyle = {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
  };

  const errorStyle = {
    color: "red",
    textAlign: "center",
    marginBottom: "10px",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0",
  };

  const listItemStyle = {
    marginBottom: "10px",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#007BFF",
    fontWeight: "bold",
  };

  const listItemHoverStyle = {
    transform: "scale(1.02)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Chat List</h2>
      {error && <div style={errorStyle}>{error}</div>}
      <ul style={listStyle}>
        {conversations.map((conversation, i) => (
          <li
            key={i}
            style={{
              ...listItemStyle,
              ...(i % 2 === 0 ? { backgroundColor: "#f2f2f2" } : {}),
              ":hover": listItemHoverStyle, // Include hover effect
            }}
          >
            <Link to={`/${id}/${conversation._id}`} style={linkStyle}>
              {conversation.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
