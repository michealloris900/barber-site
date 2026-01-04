import { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  // Data statis untuk gambar galeri
  const images = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
    "/assets/gallery4.jpg",
    "/assets/gallery5.jpg",
    "/assets/gallery6.jpg",
    "/assets/gallery7.jpg",
    "/assets/gallery8.jpg",
  ];
  // State untuk lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-15"
    style={{
        backgroundImage: "url('/assets/bgall.jpg')", // Path ke gambar
        backgroundSize: "cover", // Gambar menutupi seluruh area tanpa distorsi
        backgroundPosition: "center", // Pusatkan gambar
        backgroundRepeat: "no-repeat", // Hindari pengulangan gambar
        minHeight: "100vh", // Pastikan background mencakup seluruh tinggi viewport
    }}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-4xl font-bold mb-12 text-orange-400">Our Gallery</h2>

        {/* Grid Layout untuk Galeri */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Animasi muncul satu per satu
              },
            },
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }} // Efek hover
              onClick={() => setSelectedImage(image)} // Buka lightbox saat diklik
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)} // Tutup lightbox saat diklik di luar
          >
            <img
              src={selectedImage}
              alt="Lightbox"
              className="max-w-screen max-h-screen object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;