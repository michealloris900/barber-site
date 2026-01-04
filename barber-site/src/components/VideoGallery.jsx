import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const VideoGallery = () => {
  const videos = [
    {
      title: "BarberShop Experience",
      url: "/assets/video1.mp4", // Path ke video lokal
      type: "local", // Tandai sebagai video lokal
    },
    {
      title: "Modern Haircut Techniques",
      url: "https://www.youtube.com/embed/abcdefg12345", // Ganti dengan ID video YouTube
      type: "youtube", // Tandai sebagai video YouTube
    },
    {
      title: "Instagram Video",
      embedCode: `
        <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/your-video-link/" data-instgrm-version="14">
          <a href="https://www.instagram.com/p/your-video-link/"></a>
        </blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      `, // Ganti dengan URL video Instagram
      type: "instagram", // Tandai sebagai video Instagram
    },
  ];

  return (
    <section id="video-gallery" className="py-20 bg-gray-900">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Video Gallery - BarberShop</title>
        <meta name="description" content="Explore our video gallery showcasing barbering techniques, customer testimonials, and more." />
      </Helmet>

      <div className="container mx-auto px-6 text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-white"
        >
          Video Gallery
        </motion.h2>

        {/* Grid Layout untuk Video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Render Video Berdasarkan Tipe */}
              {video.type === "local" ? (
                // Jika video lokal
                <video
                  controls
                  muted
                  loop
                  className="w-full aspect-video object-cover"
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : video.type === "youtube" ? (
                // Jika video YouTube
                <iframe
                  src={video.url}
                  title={video.title}
                  width="100%"
                  height="315"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>
              ) : (
                // Jika video Instagram
                <div dangerouslySetInnerHTML={{ __html: video.embedCode }}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;