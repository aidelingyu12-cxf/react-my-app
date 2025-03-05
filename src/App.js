import './App.css';
import '../src/assets/scss/common.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import MainCard from "./pages/MainCard/index";
import Demo from "./pages/Demo/index";
import Dashboard from "./pages/Dashboard/index";
import Echarts from "./pages/Demo/Echarts";
import Ueditor from "./pages/Demo/Ueditor";
import User from "./pages/Modules/Sys/User";
import Role from "./pages/Modules/Sys/Role";
import Menu from "./pages/Modules/Sys/Menu";
import Config from "./pages/Modules/Sys/Config";
import Log from "./pages/Modules/Sys/Log";
import Upload from "./pages/Modules/Oss/Oss-upload";
import Schedule from "./pages/Modules/Job/Schedule";
import Sql from "./pages/Modules/Sql/Sql";
import Main from "./pages/Main/Main";
import Error from "./pages/Common/Error.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />}>
          {/* ✅ 让 Main 组件处理子路由，MainCard 只在 main-card 里显示 */}
          <Route path="/sys/editor" element={<Echarts />} />
          <Route path="/sys/ueditor" element={<Ueditor />} />
          <Route path="/sys/user" element={<User />} />
          <Route path="/sys/roles" element={<Role />} />
          <Route path="/sys/menu" element={<Menu />} />
          <Route path="/sys/config" element={<Config />} />
          <Route path="/sys/log" element={<Log />} />
          <Route path="/oss/upload" element={<Upload />} />
          {/* <Route path="/sql" element={<Sql />} /> */}
          <Route path="/job-schedule" element={<Schedule />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/maincard" element={<MainCard />} />
          <Route path="/errors" element={<Error />} />
          <Route path="/sys/sql" element={<Sql />} />


        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
