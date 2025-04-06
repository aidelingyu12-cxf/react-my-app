import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import MainCard from './pages/MainCard/index';
import Auth from './AuthContext.js'
import Login from './pages/Login/index'
import ProtectComponent from './ProtectComponets.js';
import Dashboard from './pages/Dashboard/index.js'
import Home from './components/Home/home.js'
import Role from './pages/Modules/Sys/Role.js'
import Menu from './pages/Modules/Sys/Menu.js'
import User from './pages/Modules/Sys/User.js'
import Log from './pages/Modules/Sys/Log.js'
import Editor from './pages/Demo/Echarts.js'
import Ueditor from './pages/Demo/Ueditor.js'
import Sql from './pages/Modules/Sql/Sql.js'


const App = () => {
    // 示例: 定义一些状态来模拟用户信息
    const [user, setUser] = useState(null);

    // 假设你有登录逻辑来设置用户信息
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const value = {
        user,
        login: (userInfo) => {
            setUser(userInfo);
            localStorage.setItem('user', JSON.stringify(userInfo));
        },
        logout: () => {
            setUser(null);
            localStorage.removeItem('user');
        },
    };

    return (
        < Auth.Provider value={value} >
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    {/* <Route path="/register" element={Register}></Route> */}
                    <Route path="/"
                        element={
                            <Auth>
                                <Main />
                            </Auth>
                        } >
                        <Route path="/home" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/demo">
                            <Route path="/demo/editor" element={<Editor />}></Route>
                            <Route path="/demo/ueditor" element={<Ueditor />}></Route>
                        </Route>
                        <Route path="/sys">
                            <Route path="/sys/roles" element={<Role />}></Route>
                            <Route path="/sys/menu" element={<Menu />}></Route>
                            <Route path="/sys/sql" element={<Sql />}></Route>
                            <Route path="/sys/user" element={<User />}></Route>
                            <Route path="/sys/log" element={<Log />}></Route>
                        </Route>
                        {/* <Route path="/errors" element={<Dashboard />}>
                            <Route path="/main/permission" element={<Dashboard />}></Route>
                            <Route path="/error/404" element={<Dashboard />}></Route>
                        </Route> */}
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter >
        </Auth.Provider >

    );
};

export default App;
