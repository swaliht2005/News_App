import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/common/Navebar";

function ArticleDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  useEffect(() => {
    if (!article) {
      navigate("/"); // Redirect to homepage if no article is found
    }
  }, [article, navigate]);

  if (!article) {
    return <p className="text-center text-gray-500">Redirecting...</p>;
  }

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="h-[100px] w-full">
        <Navbar />
      </div>
      <div className="p-6">
        <div className="flex  gap-10">
        <img
          src={article.image?.trim() }
          className=" h-64 object-cover rounded-lg"
        />
        <h3 className="text-4xl font-bold text-black  dark:text-white mt-4">{article.title}</h3>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{article.description || "No description available"}</p>
        <p className="text-sm text-gray-400 mt-2">{article.author} • {new Date(article.published).toDateString()}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
           Go to Blog
        </a>

      </div>
    </div>
  );
}

export default ArticleDetails;
