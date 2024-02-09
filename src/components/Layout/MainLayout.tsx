import { Outlet } from "react-router-dom";
import Navber from "./Navber";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default MainLayout;
