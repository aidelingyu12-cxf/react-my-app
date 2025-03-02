import logo from './logo.svg';
import './App.css';
import '../src/assets/scss/common.css'
import Home from './components/Home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Main from "./pages/Main/index";
import MainCard from "./pages/MainCard/index";
import Demo from "./pages/Demo/index";
import Dashboard from "./pages/Dashboard/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />}>
          {/* ✅ 让 Main 组件处理子路由，MainCard 只在 main-card 里显示 */}
          <Route path="/ppp" element={<MainCard />} />
          <Route path="/spam" element={<MainCard/>} />
          <Route path="/main/demo" element={<Demo/>} />
          <Route path="/main/dashboard" element={<Dashboard/>} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
