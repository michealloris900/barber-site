import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import CountUp from "react-countup"; // Animasi angka
import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  ClockIcon,
} from "@heroicons/react/24/solid"; // Impor ikon dari Heroicons

const Story = () => {
  return (
    <section id="story" className="py-15 " 
    style={{
        backgroundImage: "url('/assets/bgall.jpg')", // Path ke gambar
        backgroundSize: "cover", // Gambar menutupi seluruh area tanpa distorsi
        backgroundPosition: "center", // Pusatkan gambar
        backgroundRepeat: "no-repeat", // Hindari pengulangan gambar
        minHeight: "100vh", // Pastikan background mencakup seluruh tinggi viewport
    }}
    >
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Story - BarberShop</title>
        <meta name="description" content="Learn about the history and journey of our barbershop." />
      </Helmet>

      <div className="container mx-auto px-6 text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-amber-500"
        >
          Our Story
        </motion.h2>

        {/* Konten Cerita */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12"
        >
          {/* Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/assets/story01.jpg" // Ganti dengan path gambar cerita
              alt="BarberShop Story"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Teks Cerita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="bg-stone-950/75 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold  text-orange-400 mb-4">The Beginning</h3>
            <p className="text-white mb-6">
              Founded in 2010, BarberShop started as a small local business with a passion for providing top-notch grooming services. Our mission has always been to create a welcoming space where customers feel at home while receiving the best care.
            </p>
            </div>

            <div className="bg-stone-950/75 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Journey</h3>
            <p className="text-white mb-6">
              Over the years, we have grown into a trusted name in the community. From classic haircuts to modern styles, we continuously adapt to meet the needs of our clients while maintaining the highest standards of quality.
            </p>
            </div>

            <div className="bg-stone-950/75 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Vision & Mission</h3>
            <p className="text-white">
              Our vision is to redefine the barbershop experience by combining tradition with innovation. We aim to inspire confidence in every client through exceptional service and personalized attention.
            </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistik */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }} // Delay agar muncul setelah cerita
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Established Since */}
          <div className="bg-stone-950/75 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <CalendarIcon className="h-10 w-10 text-orange-400 mb-4" /> {/* Ikon Kalender */}
            <h3 className="text-3xl font-bold text-orange-400">
              <CountUp end={2010} duration={5} /> {/* Animasi angka */}
            </h3>
            <p className="text-white mt-2">Established Since</p>
          </div>

          {/* Jumlah Outlet */}
          <div className="bg-stone-950/75 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <MapPinIcon className="h-10 w-10 text-orange-400 mb-4" /> {/* Ikon Lokasi */}
            <h3 className="text-3xl font-bold text-orange-400">
              <CountUp end={15} duration={5} /> {/* Animasi angka */}
            </h3>
            <p className="text-white mt-2">Outlets</p>
          </div>

          {/* Professional Barbers */}
          <div className="bg-stone-950/75 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <UsersIcon className="h-10 w-10 text-orange-400 mb-4" /> {/* Ikon Pengguna */}
            <h3 className="text-3xl font-bold text-orange-400">
              <CountUp end={50} duration={5} /> {/* Animasi angka */}
            </h3>
            <p className="text-white mt-2">Professional Barbers</p>
          </div>

          {/* Years Experience */}
          <div className="bg-stone-950/75 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <ClockIcon className="h-10 w-10 text-orange-400 mb-4" /> {/* Ikon Jam */}
            <h3 className="text-3xl font-bold text-orange-400">
              <CountUp end={13} duration={10} /> {/* Animasi angka */}
            </h3>
            <p className="text-white mt-2">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;