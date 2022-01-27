import React from 'react';
import 'antd/dist/antd.css';
import Home from './Home';
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
