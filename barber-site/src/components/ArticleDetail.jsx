import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import articles from "../data/articles";

const ArticleDetail = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const article = articles.find((article) => article.id === parseInt(id)); // Cari artikel berdasarkan ID

  if (!article) {
    return <div className="text-center py-20">Article not found.</div>;
  }

  return (
    <section id="article-detail" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Gambar Artikel */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />

        {/* Judul dan Metadata */}
        <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
        <p className="text-gray-400 mb-8">
          By {article.author} | {new Date(article.date).toLocaleDateString()}
        </p>

        {/* Konten Artikel */}
        <div
          className="text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>
    </section>
  );
};

export default ArticleDetail;