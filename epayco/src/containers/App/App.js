import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar.js";
import Header from "../../components/Header.js";
import Home from "../Home/Home.js";
import Footer from "../../components/Footer.js";
import "../../sass/app.scss";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <Route path="/" component={Home} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
