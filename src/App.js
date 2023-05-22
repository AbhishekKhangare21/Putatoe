import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
