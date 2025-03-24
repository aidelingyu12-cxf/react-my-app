import RouterBreadcrumbs from "../../components/SideBar/index"
import ResponsiveAppBar from "../../components/Header/index"
import MainCard from "../../pages/MainCard/index.js"
import "./index.css"
import { Route, Routes, Link, Outlet } from "react-router-dom"


export default function index() {

  return (

    <div className="main-bar">
      <div className="side-bar">
        <RouterBreadcrumbs></RouterBreadcrumbs>
      </div>

      <div className="content-container">
        <div className="top-bar">
          <ResponsiveAppBar></ResponsiveAppBar>
        </div>
        <div>
          teste
        </div>
        <div className="main-card">
          <div className="main-card-content">
            <Outlet />
          </div>


        </div>



      </div>

    </div>

  )
}