import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { GalleryPage } from "../pages/GalleryPage";
import { AnimatePresence } from "framer-motion";
import { ContactPage } from "../pages/ContactPage";
import { Events } from "../pages/Events";
import { IndividualEvent } from "../pages/IndividualEvent";
import { UpEvent } from "../pages/UpEvent";

export const PageRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<IndividualEvent />} />
        <Route path="/uevent/:id" element={<UpEvent />} />
      </Routes>
    </AnimatePresence>
  );
};
