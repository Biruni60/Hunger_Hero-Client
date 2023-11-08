import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../UserAuth/AuthProvider";
import MyFoodDetail from "./MyFoodDetail";



const MyFoodRequest = () => {
    
    const{user}=useContext(AuthContext)
    const [foods,setFoods]=useState([])
    const url=`http://localhost:5000/requestfoods?email=${user?.email}`
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res=>setFoods(res.data))
       
    },[url])

    return (
        <div>
            <h2 className="text-3xl text-center my-6 text-orange-600">MY REQUESTS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {
                    foods&&foods.map(food=><MyFoodDetail key={food._id} food={food} foods={foods} setFoods={setFoods}></MyFoodDetail>)
                }
            </div>
        </div>
    );
};

export default MyFoodRequest;