import React from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
