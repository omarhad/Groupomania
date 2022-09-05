import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Profil from '../../pages/Profil';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="home/*" element={<Home />} />
                <Route path="profil/*" element={<Profil />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;