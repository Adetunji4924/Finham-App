import DashboardHeader from "./Header"
import SideBar from "./Sidebar"
import {Outlet} from 'react-router-dom'
import "../dashboard.css"

const Layout = () => {
    return(
        <div className="bg-[#F5F7FA] grid grid-cols-6 gap-0 md:gap-0.5">
            <SideBar></SideBar>
            <div className="col-span-5">
                <DashboardHeader />
                <div className="px-4 md:px-8 py-8 ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout