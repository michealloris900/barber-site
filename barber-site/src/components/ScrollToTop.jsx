import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke atas saat pathname (URL) berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini tidak merender apa pun
};

export default ScrollToTop;