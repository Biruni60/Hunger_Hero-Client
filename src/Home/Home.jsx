import Banner from "./HomeComponent/BannerComponent/Banner";
import FeaturedFood from "./HomeComponent/FeaturedFood/FeaturedFood";
import OurOffices from "./OurOffices";
import Question from "./Question";


const Home = () => {
    return (
        <div>
           <div>
         <Banner></Banner>
         <FeaturedFood></FeaturedFood>
         <Question></Question>
         <OurOffices></OurOffices>
           </div> 
        </div>
    );
};

export default Home;