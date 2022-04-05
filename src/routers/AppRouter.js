import { logEvent } from "firebase/analytics";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import { analytics } from "../firebase/conf";

export default function AppRouter() {
  const { pathname } = useLocation();
  logEvent(analytics, "screen_view", {
    firebase_screen: pathname,
    firebase_screen_class: "view",
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
