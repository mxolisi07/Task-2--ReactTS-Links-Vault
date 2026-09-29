import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Home from "../Components/Home";
import AllLinks from "../Components/AllLinks";
import Tags from "../Components/Tags";
import Settings from "../Components/Settings";
import AddLinkForm from "../Components/AddLinkForm"
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllLinks />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add" element={<AddLinkForm />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;
