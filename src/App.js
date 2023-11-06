import React, { useState, useEffect } from "react";
const io = require("socket.io-client");
const socket = io("http://localhost:4500");

const App = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("chat message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // Emit the message text to the server
    socket.emit("send_message", message);
    // Clear the message input field
    setMessage("");
  };

  return (
    <div>
      <input
        placeholder="Enter a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
