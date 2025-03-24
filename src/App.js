import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import MainCard from './pages/MainCard/index';
import Auth from './AuthContext.js'

const App = () => {
    let vas = 1;
    return (
        < Auth.Provider value={vas} >
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={Login}></Route>
                    <Route path="/register" element={Register}></Route>
                    <Route path="/"
                        element={
                            <Auth>
                                <Main />
                            </Auth>
                        } >
                        <Route path="/home" element={<MainCard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Auth.Provider >

    );
};

export default App;
