import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";

export default function AppRouter() {
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
