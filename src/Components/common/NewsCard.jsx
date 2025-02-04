import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import NewsImage from "../../assets/news.jpg"; // Fallback image

const NewsCard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.currentsapi.services/v1/latest-news?category=technology&apiKey=RxSr-eaK_JpkJD38u0AenwL6IgFaRR1S7POGMONChfXlGKXC"
        );
        setArticles(response.data.news || []);
      }  finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  

  if (loading) return <p className="text-center text-gray-500">Loading news...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
     {articles.map((news, index) => (
  <div
    key={index}
    className="relative h-96 bg-cover bg-center rounded-lg shadow-md transition hover:shadow-lg"
    style={{ backgroundImage: `url(${news.image })` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
      <h3 className="text-lg font-semibold text-white">{news.title}</h3>
      <p className="text-gray-300 text-sm">
        {news.description ? `${news.description.substring(0, 100)}...` : "No description available"}
      </p>
      <p className="text-xs text-gray-400">
        {news.author } • {new Date(news.published).toDateString()}
      </p>

      <div className="mt-3">
        <Link to={`/articledetails`}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  </div>
))}

    </div>
  );
};

export default NewsCard;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import NewsImage from "../../assets/news.jpg"; // Sample fallback image

// const NewsCard = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.currentsapi.services/v1/latest-news?category=technology&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
//         );
//         setArticles(response.data.news); // Adjust if API structure is different
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {articles.length === 0 ? (
//         <p className="text-center text-gray-500">Loading news...</p>
//       ) : (
//         articles.map((news, index) => (
//           <div
//             key={index}
//             className="relative h-96 bg-cover bg-center rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
//             style={{
//               backgroundImage: `url(${news.image || NewsImage})`,
//             }}
//           >
//             {/* Overlay for Better Readability */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col p-4 justify-end">
//               <h3 className="text-lg font-semibold text-white">{news.title}</h3>
//               <p className="text-gray-300 text-sm">
//                 {news.description ? news.description.substring(0, 100) + "..." : "No description available"}
//               </p>
//               <p className="text-xs text-gray-400">{news.author || "Unknown"} • {new Date(news.published).toDateString()}</p>
//               <div className="mt-3">
//                 <a href={news.url} target="_blank" rel="noopener noreferrer">
//                   <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
//                     Read More
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default NewsCard;
