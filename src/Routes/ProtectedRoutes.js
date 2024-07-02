// import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import Sidebar from "../Components/Sidebar/Sidebar";
// const isAuth = false;
const IsProtectedRoutes = () => {
  // const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");
  // const userRole = localStorage.getItem("userRoles");
  // console.log("userRole in protect", userRole);

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/login");
  //   }
  // }, [isAuth, navigate]);

  return isAuth ? (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      {/* <Sidebar userRole={userRole} /> */}
      <Outlet />
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

const IsNotProtectedRoutes = () => {
  // const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");

  // useEffect(() => {
  //   if (isAuth) {
  //     navigate("/");
  //   }
  // }, [navigate, isAuth]);

  return isAuth ? (
    <Navigate to={"/"} />
  ) : (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Outlet />
    </div>
  );
};

export { IsProtectedRoutes, IsNotProtectedRoutes };
