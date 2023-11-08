import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import AvailableFood from "./AvailableFood";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const AvailableFoods = () => {
    const loadedFoods=useLoaderData()
    const [availableFoods,setAvailableFoods]=useState(loadedFoods)
    


    const handleSearch=(e)=>{
     e.preventDefault()
     const serachItem=e.target.search.value 
     e.target.reset()
    
     const remaining=loadedFoods.find(loadedFood=>{
       return loadedFood.name===serachItem
     })
    
     if(remaining){
     setAvailableFoods([remaining])
    }
     else{
        toast("Item not found")
    }
}
    const handleSort=()=>{
    axios.get('http://localhost:5000/availablefoods/sorted')
    .then(res=>{
        setAvailableFoods(res.data)
        toast("Foods Sorted By Expire Date")
    })
    }
    return (
        <div>
           <div>
           <div>
         <div className="hero  h-[40vh]" style={{backgroundImage: 'url(https://i.ibb.co/PhKPPhS/Cloudy.png)'}}>
  <div className="hero-overlay bg-opacity-20 "></div>
  <div className=" w-full h-full  text-neutral-content">
    <form onSubmit={handleSearch} className="flex p-4 my-10 justify-center ">
    <input type="text" name="search" placeholder="Search..." className=" input-accent text-white placeholder:text-white input bg-transparent w-1/2 " />
     <input type="submit" value="SEARCH" className="input bg-red-500 placeholder:text-white"/> 
     
    </form>
    <div className="text-center  my-6">
        <button onClick={handleSort} className="btn btn-outline w-36 text-white text-xl ">SORT</button>
    </div>
  </div>
</div>
         </div>
           </div>
           <h2 className="text-4xl text-center font-semibold text-orange-600 my-10 md:my-16">Avaiable Foods</h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
            {
                availableFoods&&availableFoods.map(availableFood=><AvailableFood key={availableFood._id} availableFood={availableFood}></AvailableFood>)
            }
           </div>
           <ToastContainer />
        </div>
    );
};

export default AvailableFoods;