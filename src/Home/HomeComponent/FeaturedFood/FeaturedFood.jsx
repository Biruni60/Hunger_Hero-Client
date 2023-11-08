import { Link, useLoaderData } from "react-router-dom";
import FeaturedFoodDetails from "./FeaturedFoodDetails";



const FeaturedFood = () => {
    const foods=useLoaderData()
  
    return (
        <div>
         <h2 className="text-4xl text-center font-semibold text-orange-600 my-10 md:my-16">Featured Foods</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 p-2">
           {
            foods.slice(0,6).map(food=><FeaturedFoodDetails key={food._id} food={food}></FeaturedFoodDetails>)
           }
        </div>
        <div className="w-1/2 mx-auto">
          <Link to='/availablefoods'>  <button className="btn btn-outline text-red-400 w-full mb-10">Show All Foods</button></Link>
        </div>
        </div>
    );
};

export default FeaturedFood;