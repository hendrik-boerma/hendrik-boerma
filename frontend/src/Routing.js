import { Route, Routes, useLocation } from "react-router-dom";
import About from './pages/About.js';
import Experience from './pages/Experience.js';
import Work from './pages/Work.js';
import NotFound from './pages/NotFound.js';
import { useEffect } from "react";

function Routing() {
  const location = useLocation();

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/work" element={<Work />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;