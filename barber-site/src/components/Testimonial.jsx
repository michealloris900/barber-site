import { motion } from "framer-motion";

const testimonials = [
    {
      name: "John Doe",
      review: "Amazing service! I love my new haircut. The barber was very professional.",
      image: "https://picsum.photos/400/300?random=2", // Gambar pelanggan (opsional)
    },
    {
      name: "Jane Smith",
      review: "Great experience! The atmosphere is cozy, and the staff is friendly.",
      image: "https://picsum.photos/400/300?random=3",
    },
    {
      name: "Michael Brown",
      review: "Best barbershop in town! Highly recommend their beard trim service.",
      image: "https://picsum.photos/400/300?random=5", // Gambar pelanggan (opsional)
    },
  ];
  
  const Testimonial = () => {
    return (
      <section id="testimonials" className="py-15 pb-20"
      style={{
        backgroundImage: "url('/assets/bgall.webp')", // Path ke gambar
        backgroundSize: "cover", // Gambar menutupi seluruh area tanpa distorsi
        backgroundPosition: "center", // Pusatkan gambar
        backgroundRepeat: "no-repeat", // Hindari pengulangan gambar
        minHeight: "100vh",
      }}>
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-12 text-orange-400"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-stone-950/75 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-red-600"
                  />
                )}
                <p className="text-gray-300 mb-4">{testimonial.review}</p>
                <p className="font-bold text-white">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonial;