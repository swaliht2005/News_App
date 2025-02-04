import React, { useEffect, useState } from 'react';
import Navbar from '../Components/common/Navebar';  // Make sure the name is correct
import axios from 'axios';

function ArticleDetails() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.currentsapi.services/v1/latest-news?category=technology&apiKey=RxSr-eaK_JpkJD38u0AenwL6IgFaRR1S7POGMONChfXlGKXC"
        );
        setArticles(response.data.news || []);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      }
    };

    fetchNews();
  }, []);  // Empty dependency array to run only once

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="h-[100px] w-full">
        <Navbar />
      </div>
      <div className="p-6">
  {articles.map((news, index) => (
    <div key={index} className="mb-4">
        <img src={news.image} alt="" />
      <h3 className="text-lg font-semibold text-black dark:text-white">{news.title}</h3>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {news.description ? news.description : "No description available"}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default ArticleDetails;
