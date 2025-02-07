// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const NewsCard = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true); // Only loading state

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.currentsapi.services/v1/latest-news?category=technology&apiKey=RxSr-eaK_JpkJD38u0AenwL6IgFaRR1S7POGMONChfXlGKXC"
//         );
//         setArticles(response.data.news || []);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);
//   const navigate = useNavigate();
//   if (loading) return <p className="text-center text-gray-500">Loading news...</p>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {articles.map((news, index) => (
//         <div
//           key={index}
//           className="relative h-96 bg-cover bg-center rounded-lg shadow-md transition hover:shadow-lg"
//           style={{ backgroundImage: `url(${news.image})` }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
//             <h3 className="text-lg font-semibold text-white">{news.title}</h3>
//             <p className="text-gray-300 text-sm">
//               {news.description ? `${news.description.substring(0, 100)}...` : "No description available"}
//             </p>
//             <p className="text-xs text-gray-400">
//               {news.author} • {new Date(news.published).toDateString()}
//             </p>

//             <div className="mt-3 w-full flex justify-between">
    
//                     <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//                      onClick={() => navigate(`/articledetails`, { state: { article: news } })}>
//                       Read More
//                     </button>
                    
//                     <button 
//                       className="bg-gradient-to-r from-red-400 to-pink-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//                       onClick={() => saveArticle(news)}>
//                       Save
//                     </button>

      

//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsCard;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NewsCard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.currentsapi.services/v1/latest-news?category=technology&apiKey=RxSr-eaK_JpkJD38u0AenwL6IgFaRR1S7POGMONChfXlGKXC"
        );
        setArticles(response.data.news || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // ✅ Function to save an article to Local Storage
  const saveArticle = (article) => {
    const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
    savedArticles.push(article);
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    alert("Article saved!");
  };

  if (loading) return <p className="text-center text-gray-500">Loading news...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((news, index) => (
        <div
          key={index}
          className="relative h-96 bg-cover bg-center rounded-lg shadow-md transition hover:shadow-lg"
          style={{ backgroundImage: `url(${news.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h3 className="text-lg font-semibold text-white">{news.title}</h3>
            <p className="text-gray-300 text-sm">
              {news.description ? `${news.description.substring(0, 100)}...` : "No description available"}
            </p>
            <p className="text-xs text-gray-400">
              {news.author} • {new Date(news.published).toDateString()}
            </p>

            <div className="mt-3 w-full flex justify-between">
              {/* ✅ "Read More" navigates to Article Details */}
              <button 
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                onClick={() => navigate(`/articledetails`, { state: { article: news } })}
              >
                Read More
              </button>
 
              <button 
                className="bg-gradient-to-r from-red-400 to-pink-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                onClick={() => saveArticle(news)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
