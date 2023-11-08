import Banner from "./HomeComponent/BannerComponent/Banner";
import FeaturedFood from "./HomeComponent/FeaturedFood/FeaturedFood";
import OurOffices from "./OurOffices";


const Home = () => {
    return (
        <div>
           <div>
         <Banner></Banner>
         <FeaturedFood></FeaturedFood>
         <OurOffices></OurOffices>
           </div> 
        </div>
    );
};

export default Home;