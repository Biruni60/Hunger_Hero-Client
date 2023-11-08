import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../UserAuth/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleFoodDetail = () => {
    const {_id,name,image,quantity,expireDate,location,email,displayName}=useLoaderData()
    const {user}=useContext(AuthContext)
    const [foods,setFoods]=useState([])
    useEffect(()=>{
      axios.get('https://donate-food-server-6vb7g06zg-biru60s-projects.vercel.app /requestfood')
      .then(res=>setFoods(res.data))
    },[])

    const handleRequest=(e)=>{
       e.preventDefault()
       const requestNote=e.target.requestNote.value 
       const donation=e.target.donation.value 
       const currentDate = new Date().toLocaleDateString();
       
       const food={_id,name,image,donatorEmail:email,donatorName:displayName,requestEmail:user.email,requestDate:currentDate,location,expireDate,requestNote,donation,requestName:user.displayName,requestImage:user.photoURL,status:"Available"}
       const id=foods.find(foo=>{
        console.log(_id,foo._id);
        return foo._id===_id
       })
       if(id){
        toast("already added")
       }
       else{
      
         axios.post('https://donate-food-server-6vb7g06zg-biru60s-projects.vercel.app /requestfood',food)
       .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
             toast("Request Successfull")
        }
        })
       }
    }
    return (
        <div>
          <div>
         <div className="hero h-[30vh] " style={{backgroundImage: 'url(https://i.ibb.co/wdgr6zC/Moon.png)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">#Share the Love, Share the Food</h1>
      
    </div>
  </div>
</div>
         </div>  
         <h2 className="text-center text-4xl text-orange-600 my-10">Detail</h2>
              <div className="card card-side border bg-base-100 md:h-full mb-20 shadow-xl">
  <figure className=" w-1/2   rounded-lg"><img className=" h-full w-full " src={image}/></figure>
  <div className="card-body flex-1">
    <p className="text-center text-xl font-bold">Donar Info</p>
    <p><span className="text-lg font-bold">Donor Name: </span>{displayName}</p>
    <p><span className="text-lg font-bold">Pickup Location: </span>{location}</p>
    <p className="text-center text-xl font-bold">Food Detail</p>
    <p><span className="text-lg font-bold">Food Name: </span>{name}</p>
    <p><span className="text-lg font-bold">Quantity: </span>{quantity}</p>
    <p><span className="text-lg font-bold">Expired Date: </span>{expireDate}</p>
    {/* <input type="text" placeholder="ADDITIONAL NOTE" name="requestNote" className="input input-bordered input-warning w-full mb-2" /> */}
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="w-full btn btn-outline text-orange-400" onClick={()=>document.getElementById('my_modal_5').showModal()}>Request</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handleRequest}>
  <input type="text" placeholder="ADDITIONAL NOTE" name="requestNote" className="input input-bordered input-warning w-full mb-2" />
  <input type="text" placeholder="DONATION MONEY" name="donation" className="input input-bordered input-warning w-full mb-2" />
  <input type="submit" value="Confirm Request" className="input input-bordered text-orange-600 input-warning w-full mb-2" />
  </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-outline text-orange-600">Close</button>
      </form>
    </div>
  </div>
</dialog>

  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default SingleFoodDetail;