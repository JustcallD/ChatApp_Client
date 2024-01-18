// import { useState, useEffect } from "react";
// import io from "socket.io-client";
// import { useParams } from "react-router-dom";
// import MessageContainer from "./Message";
// import axios from "axios";
// import fetchData from "../functions/GetMessages";

// const socket = io("http://localhost:4000");

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const [participants, setParticipants] = useState([]);
//   const { sender, receiver } = useParams();

//   // const usersData = localStorage.getItem("userList");

//   // console.log("messages", messages);
//   useEffect(() => {
//     socket.emit("addUser", sender);

//     socket.on("receive_message", (data) => {
//       // console.log(data);
//       setMessages((prevData) => [...prevData, data]);
//     });

//     return () => {
//       socket.off("receive_message");
//     };
//   }, [receiver, sender]);

//   useEffect(() => {
//     const handleGetMessages = () => {
//       setParticipants[(sender, receiver)];
//     };
//     handleGetMessages();
//     // (() => {
//     //   setParticipants([sender, receiver]);
//     // })();
//     const queryString = `participants=${participants.join("&participants=")}`;
//     const fetchDataFromApi = async () => {
//       try {
//         const data = await fetchData({
//           queryString,
//         });
//         console.log("Data from API:", data);
//       } catch (error) {
//         // Handle errors if needed
//         console.error("Error fetching data in component:", error.message);
//       }
//     };

//     fetchDataFromApi();
//   }, [receiver, sender, participants]);

//   const sendMessage = () => {
//     const newMessage = {
//       sender: sender,
//       receiver: receiver,
//       text: message,
//     };
//     axios.post(" http://localhost:4000/addMessages", {
//       participants: [sender, receiver],
//       text: message,
//     });
//     socket.emit("send_message", newMessage);
//     setMessage("");
//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <MessageContainer messages={messages} />

//         </div>
//       </div>
//       <div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chat;

// import { useState, useEffect } from "react";
// import io from "socket.io-client";
// import { useParams } from "react-router-dom";
// import MessageContainer from "./Message";
// import axios from "axios";
// // import fetchData from "../functions/GetMessages";

// const socket = io("http://localhost:4000");

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState(null);
//   const { sender, receiver } = useParams();

//   useEffect(() => {
//     socket.emit("addUser", sender);

//     socket.on("receive_message", (data) => {
//       setMessages((prevData) => [...prevData, data]);
//     });

//     return () => {
//       socket.off("receive_message");
//     };
//   }, [receiver, sender]);

//   useEffect(() => {
//     const participants = [sender, receiver];
//     console.log(participants);
//     const fetchConversations = async () => {
//       try {
//         // console.log("user", id);
//         const response = await axios.get(`http://localhost:4000/getMessages`, {
//           params: { participants },
//         });

//         console.log(response.data.messages);
//         // localStorage.setItem("userList", response.data.connections);

//         setMessages(response.data.messages);
//       } catch (error) {
//         console.error("Error fetching conversations:", error);
//         setError("Error fetching conversations. Please try again.");
//       }
//     };
//     fetchConversations();
//   }, [receiver, sender]);

//   const sendMessage = () => {
//     const newMessage = {
//       sender: sender,
//       receiver: receiver,
//       text: message,
//     };

//     axios.post("http://localhost:4000/addMessages", {
//       participants: [sender, receiver],
//       text: message,
//     });
//     socket.emit("send_message", newMessage);
//     setMessage("");
//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <MessageContainer messages={messages} />
//         </div>
//       </div>
//       <div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//     </div>
//   );
// };

// export default Chat;

import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import MessageContainer from "./Message";
import axios from "axios";
import Navbar from "./Navbar";

const socket = io(import.meta.env.VITE_SERVER_URL);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const { sender, receiver } = useParams();

  useEffect(() => {
    socket.emit("addUser", sender);

    socket.on("receive_message", (data) => {
      setMessages((prevData) => [...prevData, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [receiver, sender]);

  useEffect(() => {
    const participants = [sender, receiver];

    const fetchConversations = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/getMessages`,
          {
            params: { participants },
          }
        );

        setMessages(response.data.messages);
      } catch (error) {
        console.error("Error fetching conversations:", error);
        setError("Error fetching conversations. Please try again.");
      }
    };

    fetchConversations();
  }, [receiver, sender]);

  const sendMessage = () => {
    const newMessage = {
      sender: sender,
      receiver: receiver,
      text: message,
    };

    axios.post(`${import.meta.env.VITE_SERVER_URL}/addMessages`, {
      participants: [sender, receiver],
      text: message,
    });

    socket.emit("send_message", newMessage);
    setMessage("");
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const messageContainerStyle = {
    marginBottom: "20px",
  };

  const inputContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const inputStyle = {
    flex: "1",
    padding: "10px",
    borderRadius: "5px",
    marginRight: "10px",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div style={messageContainerStyle}>
          <MessageContainer messages={messages} />
        </div>
        <div style={inputContainerStyle}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={inputStyle}
          />
          <button onClick={sendMessage} style={buttonStyle}>
            Send
          </button>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};

export default Chat;
