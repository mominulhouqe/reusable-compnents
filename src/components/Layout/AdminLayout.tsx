import { Outlet } from "react-router-dom";
import Sideber from "./Sideber";


const AdminLayout = () => {
    return (
        <div className="flex">
            <div className="flex-[1]">
            <Sideber />
            </div>
           <div className="flex-[5]">
           <Outlet />
           </div>
        </div>
    );
};

export default AdminLayout;