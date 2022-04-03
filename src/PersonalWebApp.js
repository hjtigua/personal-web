import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./app.css";
import "./styles.css";
import "./normalize.css";
import AppRouter from "./routers/AppRouter";

export default function PersonalWebApp() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-20">
          <AppRouter />
        </div>
      </div>
      <Footer />
    </>
  );
}
