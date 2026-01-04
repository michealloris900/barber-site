import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const images = [
    "/assets/gallery1.webp",
    "/assets/gallery2.webp",
    "/assets/gallery3.webp",
    "/assets/gallery4.webp",
    "/assets/gallery5.webp",
    "/assets/gallery6.webp",
    "/assets/gallery7.webp",
    "/assets/gallery8.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section 
      id="gallery" 
      className="relative py-15 min-h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/bgall.webp')",
        // 'loading' dihapus dari sini karena tidak valid di style
      }}
    >
      {/* Overlay Gelap: Meningkatkan kontras teks & skor Accessibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Judul: Pastikan warna teks kontras dengan background */}
        <h2 className="text-4xl font-bold mb-12 text-orange-400">Our Gallery</h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Trigger animasi sedikit lebih awal
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }, // Sedikit lebih cepat agar terasa responsif
            },
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-800" // Background gelap saat loading
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Koleksi gaya rambut BrayBarbers ${index + 1}`} // Alt text yang lebih deskriptif untuk SEO
                className="w-full h-48 object-cover"
                loading="lazy" // Benar ditaruh di sini
                decoding="async" // Membantu performa rendering browser
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox dengan AnimatePresence agar transisi tutup-buka halus */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImage}
                alt="Hasil cukur rambut diperbesar"
                className="max-w-full max-h-[90vh] object-contain rounded-md"
              />
              <button 
                className="absolute top-5 right-5 text-white text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;