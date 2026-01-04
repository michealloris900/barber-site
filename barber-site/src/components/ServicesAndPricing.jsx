const ServicesAndPricing = () => {
    // Data statis untuk layanan dan harga
    const services = [
      {
        name: "Haircut",
        description: "Classic and modern styles.",
        price: "Rp.300.000",
        image: "/assets/service1.jpg", // Gambar layanan
      },
      {
        name: "Beard Trim",
        description: "Perfectly groomed beard.",
        price: "Rp.250.000",
        image: "/assets/service2.jpg",
      },
      {
        name: "Shaving",
        description: "Smooth and clean shave.",
        price: "Rp.180.000",
        image: "/assets/service3.jpg",
      },
      {
        name: "Hair Coloring",
        description: "Custom hair coloring services.",
        price: "Rp.300.000",
        image: "/assets/service4.jpg",
      },
      {
        name: "Kids Haircut",
        description: "Special haircut for kids.",
        price: "Rp.120.000",
        image: "/assets/service5.jpg",
      },
        {
            name: "Senior Haircut",
            description: "Discounted haircut for seniors.",
            price: "Rp.100.000",
            image: "/assets/service6.jpg",
      },
    ];
  
    return (
      <section id="services-and-pricing" className="py-10"
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
          <h2 className="text-4xl font-bold mb-12 text-orange-400">Our Services & Pricing</h2>
  
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-stone-950/75 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                {/* Gambar Layanan */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                {/* Nama Layanan */}
                <h3 className="text-xl font-bold text-orange-400">{service.name}</h3>
                {/* Deskripsi Layanan */}
                <p className="text-white mt-2">{service.description}</p>
                {/* Harga Layanan */}
                <p className="text-center text-orange-400 font-bold mt-4">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesAndPricing;