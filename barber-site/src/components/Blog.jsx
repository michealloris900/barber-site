const articles = [
  {
    id: 1,
    title: "Top 7 Potongan Rambut Terbaik 2025",
    description:
      "Membahas gaya rambut yang sedang populer.",
    image: "/assets/art01/TumbArt01.png",
  },
  {
    id: 2,
    title: "Produk wajib dimiliki pria di 2025",
    description:
      "Panduan Lengkap Memilih Produk Styling agar Tidak Salah Gaya",
    image: "/assets/art02/tmb.02.png",
  },
  {
    id: 3,
    title: "How to Maintain a Perfect Beard",
    description:
      "Learn how to groom and maintain your beard like a pro.",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    title: "How to Maintain a Perfect Beard",
    description:
      "Learn how to groom and maintain your beard like a pro.",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    title: "How to Maintain a Perfect Beard",
    description:
      "Learn how to groom and maintain your beard like a pro.",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    title: "How to Maintain a Perfect Beard",
    description:
      "Learn how to groom and maintain your beard like a pro.",
    image: "https://picsum.photos/400/300?random=3",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-12"
    style={{
      backgroundImage: "url('/assets/bgall.jpg')", // Path ke gambar
      backgroundSize: "cover", // Gambar menutupi seluruh area tanpa distorsi
      backgroundPosition: "center", // Pusatkan gambar
      backgroundRepeat: "no-repeat", // Hindari pengulangan gambar
    }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-orange-400">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-stone-950/75 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-400">
                  {article.title}
                </h3>
                <p className="text-white mb-4">{article.description}</p>
                {/* Gunakan tag <a> dengan target="_blank" */}
                <a
                  href={`/article/${article.id}`} // URL artikel
                  target="_blank" // Buka di tab baru
                  rel="noopener noreferrer" // Keamanan untuk tab baru
                  className="text-orange-400 font-semibold hover:text-red-400 transition-colors duration-300"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;