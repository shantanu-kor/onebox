import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const auth = useSelector(state => state.auth.isAuth);

  return (
    <div>
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/google-login" replace />} />
        <Route path="/google-login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
