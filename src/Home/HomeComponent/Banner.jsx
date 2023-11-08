import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Carousal from "@itseasy21/react-elastic-carousel";
import BannerComponent from "./BannerComponent/BannerComponent";
import "./BannerComponent/Banner.css"
const Banner = () => {
    const[foods,setFoods]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/availablefoods/sorted2')
        .then(res=>setFoods(res.data))
    },[])
    return (
        <div>
         <Carousal itemsToShow={2}>
          {
            foods.map(food=><BannerComponent key={food._id} food={food}></BannerComponent>)
          }
        </Carousal>
        </div>
    );
};

export default Banner;