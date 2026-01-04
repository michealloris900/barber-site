import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gray-900"
      style={{
        backgroundImage: "url('/assets/home-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Story - BarberShop</title>
        <meta name="description" content="Learn about the history and journey of our barbershop." />
      </Helmet>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 text-white"
        >
          Welcome to BrayBarbers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8 text-gray-300"
        >
          Keep Handsome And Rock&Roll With Yours
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-amber-950 px-6 py-3 rounded-full text-white font-semibold"
        >
          Book A Consultation
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;