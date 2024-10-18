import { Route, Routes, useLocation } from "react-router-dom";
import About from './pages/About.js';
import Experience from './pages/Experience.js';
import Work from './pages/Work.js';
import { useEffect } from "react";

function Routing() {
  const location = useLocation();

  useEffect(() => {
    console.log('Path changed:', location.pathname);
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location.pathname]);

  return (
    <Routes basename="/">
      <Route path="/" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}

export default Routing;