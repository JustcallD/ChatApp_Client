import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div style={{ width: "100dvw", height: "100dvh" }}>
      <Outlet />
    </div>
  );
};

export default Root;
