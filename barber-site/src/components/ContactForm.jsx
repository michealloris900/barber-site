import { Helmet } from "react-helmet-async";

const ContactForm = () => {
    return (
      <section id="contact" className="py-20"
      style={{
        backgroundImage: "url('/assets/bgall.webp')", // Path ke gambar
                backgroundSize: "cover", // Gambar menutupi seluruh area tanpa distorsi
                backgroundPosition: "center", // Pusatkan gambar
                backgroundRepeat: "no-repeat", // Hindari pengulangan gambar
                minHeight: "100vh", // Pastikan background mencakup seluruh tinggi viewport
      }}
      >
        {/* SEO Meta Tags */}
        <Helmet>
          <title>BarberShop</title>
          <meta name="description" content="Get in touch with us at BarberShop. Visit our location or contact us via phone or email." />
        </Helmet>
  
        <div className="container mx-auto px-6 text-center">
          {/* Judul */}
          <h2 className="text-4xl font-bold mb-12 text-orange-400">Contact Us</h2>
  
          {/* Konten Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulir Kontak */}
            <div className="bg-stone-950/75 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-stone-950/75 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-stone-950/75 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 bg-stone-950/75 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-950 px-6 py-3 rounded-full text-white font-semibold hover:bg-amber-700 transition-colors duration-300"
                >
                  Send
                </button>
              </form>
            </div>
  
            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10472.256974607079!2d107.74105501115021!3d-6.9370973562191836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1738952337691!5m2!1sen!2sid" // Ganti dengan embed code dari Google Maps
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="BarberShop Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactForm;