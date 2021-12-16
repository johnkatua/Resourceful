import React from "react";
import Contact from "./components/Contact";
import Display from "./components/Display";
import Footer from "./components/Footer";


import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Workspace from "./components/Workspace";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Workspace />
      <Display />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
