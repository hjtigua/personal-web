import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Home from "./components/home/Home";
import "./app.css";
import "./styles.css";
import "./normalize.css";

export default function PersonalWebApp() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <Home />
        </div>
      </div>
      <Footer />
    </>
  );
}
