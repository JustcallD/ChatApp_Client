import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./Root";
import { IsNotProtectedRoutes, IsProtectedRoutes } from "./ProtectedRoutes";
import Home from "../Pages/AppPages/Home";
import Login from "../Pages/AuthPages/Login";
import SignUp from "../Pages/AuthPages/SignUp";
import Chat from "../Pages/AppPages/Chat";
import MessageComponent from "../Components/ChatComp/MessageComponent";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<IsProtectedRoutes />}>
        <Route path="/" element={<Chat />}>
          <Route path="/:receiverId" element={<MessageComponent />} />
        </Route>
      </Route>
      <Route path="/" element={<IsNotProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Route>
  )
);

export default AppRoutes;
