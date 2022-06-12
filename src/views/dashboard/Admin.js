import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/DashboardComp/sidebar/SideBar'
import AdminNavbar from '../../Components/navbars/AdminNavbar'
import HeadersStats from '../../Components/DashboardComp/Headers/HeaderStats' 


function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavbar />
        <HeadersStats/>

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
        </div>

      </div>

    </>
  )
}

export default Admin