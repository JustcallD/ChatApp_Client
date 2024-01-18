import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Home from "./components/Home";
// import GetMessages from "./components/GetMessages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:sender/:receiver" element={<Chat />} />
        <Route path="/list" element={<ChatList />} />
        {/* <Route path="/message" element={<GetMessages />} /> */}
      </Routes>
    </>
  );
};

export default App;
