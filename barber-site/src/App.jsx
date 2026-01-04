import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesAndPricing from "./components/ServicesAndPricing";
import Gallery from "./components/Gallery"; // Import komponen Gallery
import Testimonial from "./components/Testimonial";
import Story from "./components/Story";
import Blog from "./components/Blog";
import ArticleDetail from "./components/ArticleDetail";
import VideoGallery from "./components/VideoGallery";
import ContactForm from "./components/ContactForm"; // Import komponen ContactForm
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-black text-white min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* ScrollToTop */}
          <ScrollToTop />

          {/* Routing */}
          <Routes>
            {/* Halaman Utama */}
            <Route path="/" element={
              <>
                <Hero />
                <Story />
                <ServicesAndPricing />
                <Gallery />
                <Testimonial />
                <Blog />
                <VideoGallery />
                <ContactForm />
              </>
            } />
            {/* Halaman Detail Artikel */}
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;