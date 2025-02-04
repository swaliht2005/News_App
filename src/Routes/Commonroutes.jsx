import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/common/Navebar"; 
import Home from "../Pages/Home";
import NewsCard from "../Components/common/NewsCard";
import ArticleDetails from "../Pages/ArticleDetails";



function Commonroutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/navebar" element={<Navbar />} />
       <Route path="/newscard" element={<NewsCard/>} />
       <Route path="/articledetails" element={<ArticleDetails/>} />
       
    </Routes>
  );
}

export default Commonroutes;
