// import React, { useState, useEffect } from "react";

// function saveArticle() {
//   const [savedArticles, setSavedArticles] = useState([]);

//   useEffect(() => {
//     const storedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
//     setSavedArticles(storedArticles);
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Saved Articles</h2>

//       {savedArticles.length === 0 ? (
//         <p className="text-gray-500">No articles saved yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {savedArticles.map((article, index) => (
//             <div
//               key={index}
//               className="relative h-96 bg-cover bg-center rounded-lg shadow-md transition hover:shadow-lg"
//               style={{ backgroundImage: `url(${article.image})` }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
//                 <h3 className="text-lg font-semibold text-white">{article.title}</h3>
//                 <p className="text-gray-300 text-sm">
//                   {article.description ? `${article.description.substring(0, 100)}...` : "No description available"}
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   {article.author} • {new Date(article.published).toDateString()}
//                 </p>
//               </div>
//             </div>
//           ))}
          
//         </div>
//       )}
//     </div>
//   );
// }

// export default saveArticle;


import React, { useState, useEffect } from "react";

function SavedArticlesPage() {
  const [savedArticles, setSavedArticles] = useState([]);

  // Fetch saved articles from local storage
  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(storedArticles);
  }, []);

  // Function to handle article deletion
  const handleDelete = (index) => {
    const updatedArticles = savedArticles.filter((_, i) => i !== index);
    setSavedArticles(updatedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Saved Articles</h2>

      {savedArticles.length === 0 ? (
        <p className="text-gray-500">No articles saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedArticles.map((article, index) => (
            <div
              key={index}
              className="relative h-96 bg-cover bg-center rounded-lg shadow-md transition hover:shadow-lg"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                {/* Delete Button */}
                <button
                  className="bg-gradient-to-b from-indigo-500 to-pink-500 text-white p-2 rounded-full hover:opacity-80 transition shadow-md absolute left-[450px] bottom-80"
                  onClick={() => handleDelete(index)} // Delete the article
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.225 5.225a.75.75 0 0 1 1.06 0L12 9.94l4.715-4.715a.75.75 0 1 1 1.06 1.06L13.06 11l4.715 4.715a.75.75 0 1 1-1.06 1.06L12 12.06l-4.715 4.715a.75.75 0 1 1-1.06-1.06L10.94 11 6.225 6.285a.75.75 0 0 1 0-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                <p className="text-gray-300 text-sm">
                  {article.description
                    ? `${article.description.substring(0, 100)}...`
                    : "No description available"}
                </p>
                <p className="text-xs text-gray-400">
                  {article.author} • {new Date(article.published).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedArticlesPage;
