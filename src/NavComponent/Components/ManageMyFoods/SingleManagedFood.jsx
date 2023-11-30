import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleManagedFood = () => {
    const  {id}=useParams()
    const [food,setFood]=useState(null)
    
    useEffect(()=>{
   axios.get(`https://donate-food-server.vercel.app/manage/${id}`,{withCredentials:true})
   .then(res=>{
    if(res.data){
        setFood(res.data)
    }
   })
    },[id])
    const handleDeliver=id=>{
        axios.put(`https://donate-food-server.vercel.app/status/${id}`,{withCredentials:true})
        .then(res=>{
            if(res.status===200){
               axios.delete(`https://donate-food-server.vercel.app/delete/${id}`,{withCredentials:true})
               .then(res=>{
                if(res.status===200){
                    toast("food is delivered")
                }
               })
            }
        })
    }
    return (
        <div>
        {
            food?
            <div className="my-10"> 
            <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
  <img className="w-24" src={food.requestImage} alt="" />
  <p><span className="text-lg font-bold">Requestor Name: </span>{food.requestName}</p>
  <p><span className="text-lg font-bold">Requestor Email: </span>{food.requestEmail}</p>
  <p><span className="text-lg font-bold">Request Date: </span>{food.requestDate}</p>
  <p><span className="text-lg font-bold">Status: </span><span className=" text-orange-400">{food.status}</span></p>
  <button onClick={()=>handleDeliver(food._id)} className="btn btn-outline text-orange-600">Deliver</button>
  </div>
</div>
            
            
            
            </div>
            :
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/YWW7gj9/emily-morter-8x-AA0f9y-Qn-E-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">No USER HAS REQUESTED THE FOOD</h1>
      
    </div>
  </div>
</div>
        }
        <ToastContainer />
        </div>
    );
};

export default SingleManagedFood;