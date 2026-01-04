import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>BrayBarbers | Barbershop Premium & Gaya Rambut Modern</title>
        <meta name="description" content="BrayBarbers adalah tempat cukur rambut pria terbaik dengan layanan premium, gaya modern, dan barber profesional." />
      </Helmet>

      {/* Gunakan Tag <img> alih-alih backgroundImage untuk LCP yang lebih cepat */}
      <img 
        src="/assets/home-bg.webp" 
        alt="Interior BrayBarbers dengan kursi barber klasik"
        fetchpriority="high" // Memberi tahu browser ini gambar paling penting
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gelap: Diubah ke class Tailwind untuk efisiensi */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }} // Jarak y dikurangi agar tidak menyebabkan layout shift besar
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
        >
          Welcome to BrayBarbers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-8 text-gray-200 font-medium"
        >
          Keep Handsome And Rock&Roll With Yours
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-900 hover:bg-amber-800 px-8 py-4 rounded-full text-white font-bold transition-colors shadow-xl"
        >
          Book A Consultation
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;