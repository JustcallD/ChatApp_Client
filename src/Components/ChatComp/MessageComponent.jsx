import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { serverInstance } from "../../Api/serverInstance";

const ENDPOINT = process.env.REACT_APP_SOCKET_URL;

const MessageComponent = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socketMessages, setSocketMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const { receiverId } = useParams();

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const newSocket = io(ENDPOINT, {
      withCredentials: true,
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await serverInstance.get(`/get-messages/${receiverId}`);
        setMessages(res.data.messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [receiverId]);

  useEffect(() => {
    if (socket) {
      socket.on("message", (data) => {
        console.log("data", data);
        setSocketMessages((prevMessages) => [...prevMessages, data]);
      });
    }
  }, [socket]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, socketMessages]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      socket.emit("sendMessage", {
        receiverId: receiverId,
        message: inputMessage,
      });
      setInputMessage("");
    }
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <div style={{ padding: "20px" }}>
        <h2>Messages:</h2>
        <div
          ref={messagesContainerRef}
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:
                  msg.sender._id === receiverId ? "flex-start" : "flex-end",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor:
                    msg.sender._id === receiverId ? "#e1ffc7" : "#f0f0f0",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <p>{msg.content}</p>
              </div>
            </div>
          ))}

          {socketMessages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:
                  msg.senderId === receiverId ? "flex-start" : "flex-end",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor:
                    msg.senderId === receiverId ? "#e1ffc7" : "#f0f0f0",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
              width: "calc(100% - 90px)",
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "10px 20px",
              backgroundColor: "dodgerblue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
