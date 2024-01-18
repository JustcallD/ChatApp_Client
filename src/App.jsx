import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";
import Home from "./components/Home";
import CreateConvo from "./components/CreateConvo";
// import GetMessages from "./components/GetMessages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:sender/:receiver" element={<Chat />} />
        <Route path="/list" element={<ChatList />} />
        <Route path="/addfriend" element={<CreateConvo />} />
      </Routes>
    </>
  );
};

export default App;
