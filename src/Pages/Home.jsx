

// import Navbar from "../Components/common/Navebar";
// import MoodChangeButton from "../Components/common/MoodChangeButton";
// import NewsCard from "../Components/common/NewsCard";
// import Footer from "../Components/common/Footer";

// const Home = () => {
  
//   return (
//     <div className=" h-screen w-screen overflow-x-hidden">
        
//         <div className="h-[100px] w-full ">
//           <Navbar/>
//         </div>
//         <div className="w-full flex justify-center">
//           <input
//             type="text"
//             className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//             placeholder="Search..."
//           />
//         </div>

//         <div className="relative left-[680px] bottom-[370px]  h-10 w-full  ">
//         <MoodChangeButton/>
       
//         </div>
//         <div className="h-auto  "> 
//         <NewsCard/>
//     </div>
//     <Footer/>
//       </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/common/Navebar";
import MoodChangeButton from "../Components/common/MoodChangeButton";
import NewsCard from "../Components/common/NewsCard";
import Footer from "../Components/common/Footer";

const API_KEY = "RxSr-eaK_JpkJD38u0AenwL6IgFaRR1S7POGMONChfXlGKXC"; // Define your API key here

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State to store search input
  const [filteredArticles, setFilteredArticles] = useState([]); // State to store filtered articles

  // Fetch news based on the search term
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading state to true before API call
      try {
        const response = await axios.get(
          `https://api.currentsapi.services/v1/search?keywords=${searchTerm}&apiKey=${API_KEY}`
        );
        setArticles(response.data.news || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [searchTerm]); // Fetch news based on the search term

  // Filter articles based on the search term (if available)
  useEffect(() => {
    if (searchTerm) {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles); // If no search term, show all articles
    }
  }, [searchTerm, articles]); // Apply filter when articles or search term changes

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      {/* Navbar */}
      <div className="h-[100px] w-full">
        <Navbar />
      </div>

      {/* Search Bar */}
      <div className="w-full flex justify-center mt-6">
        <input
          type="text"
          className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Search for news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
      </div>

      {/* Mood Change Button */}
      <div className="relative left-[680px] bottom-[370px] h-10 w-full">
        <MoodChangeButton />
      </div>

      {/* News Cards */}
      <div className="h-auto mt-4">
        <NewsCard articles={filteredArticles} loading={loading} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
