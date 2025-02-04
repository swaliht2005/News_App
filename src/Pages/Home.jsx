

import Navbar from "../Components/common/Navebar";
import MoodChangeButton from "../Components/common/MoodChangeButton";
import NewsCard from "../Components/common/NewsCard";
import Footer from "../Components/common/Footer";

const Home = () => {
    
  return (
    <div className=" h-screen w-screen overflow-x-hidden">
        
        <div className="h-[100px] w-full ">
          <Navbar/>
        </div>
        
        <div className="relative left-[740px] bottom-[370px]  h-10 w-full">
        <MoodChangeButton/>
        </div>
        <div className="h-auto  "> 
        <NewsCard/>
    </div>
    <Footer/>
      </div>
  );
};

export default Home;


