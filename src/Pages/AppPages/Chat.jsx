import React from "react";
import UserListComponent from "../../Components/ChatComp/UserListComponent";
// import MessageComponent from "../../Components/ChatComp/MessageComponent";
import { Outlet } from "react-router-dom";

const Chat = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log("apiUrl", apiUrl);
  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      <UserListComponent />
      {/* <MessageComponent /> */}
      <Outlet />
    </div>
  );
};

export default Chat;
