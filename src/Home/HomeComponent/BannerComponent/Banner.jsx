
import Carousal from "@itseasy21/react-elastic-carousel";

import "./Banner.css"
const Banner = () => {
  
    return (
        <div>
         <Carousal itemsToShow={1}>
         
         <div className="hero h-[40vh]" style={{backgroundImage: 'url(https://i.ibb.co/Dw1f9Dr/joel-muniz-A4-Ax1-Apccf-A-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">

    <div className="max-w-md">
    <h2 className="text-xl md:text-3xl">#Share a meal, share a smile <br /> Food donation brings joy with every bite</h2>
    </div>
  </div>
</div>
         <div className="hero h-[40vh] " style={{backgroundImage: 'url(https://i.ibb.co/JccF1Qq/melanie-lim-n-D3wun-G16-Fo-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
   <h2 className="text-xl md:text-3xl"> #Nourish hearts and souls, one plate at a time <br /> Be a food donation hero</h2>
    </div>
  </div>
</div>
         <div className="hero h-[40vh] " style={{backgroundImage: 'url(https://i.ibb.co/H7tLDMB/joel-muniz-BEr-JJL-Ksj-A-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h2 className="text-xl md:text-3xl">#Food is love, and giving is caring <br /> Help those in need with your generous food donation.</h2>
    </div>
  </div>
</div>
         <div className="hero h-[40vh]" style={{backgroundImage: 'url(https://i.ibb.co/pzWzv1M/calle-macarone-Vl78e-Ndi-Ja-Q-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h2 className="text-xl md:text-3xl">#Satisfy hunger, spread kindness <br /> Your food donation makes a world of difference</h2>
    </div>
  </div>
</div>
        </Carousal>
        </div>
    );
};

export default Banner;