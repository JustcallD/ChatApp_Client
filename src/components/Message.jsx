import "./MessageContainer.css";

// const MessageContainer = ({ messages }) => {
//   //   if (!messages || !Array.isArray(messages)) {
//   //     console.warn("Warning: 'messages' prop is missing or not an array.");
//   //     return null; // or return some default content or an empty container
//   //   }
//   const id = localStorage.getItem("user_id");
//   return (
//     <div className="message-container">
//       {messages.map((message, index) => (
//         <div
//           key={index}
//           className={`message ${
//             message.sender || message.from === id ? "sent" : "received"
//           }`}
//         >
//           {message.text}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MessageContainer;

import PropTypes from "prop-types";

const MessageContainer = ({ messages }) => {
  if (!messages || !Array.isArray(messages)) {
    console.warn("Warning: 'messages' prop is missing or not an array.");
    return null; // or return some default content or an empty container
  }

  const id = localStorage.getItem("user_id");

  return (
    <div className="message-container">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.sender || message.from === id ? "sent" : "received"
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

MessageContainer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string,
      from: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default MessageContainer;
