import { useContext } from "react";
import { AuthContext } from "../../../UserAuth/AuthProvider";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddFood = () => {
    const{user}=useContext(AuthContext);
    const {displayName,photoURL,email}=user

    const handleAddFood=e=>{
        e.preventDefault();
        const form=e.target
        const name =form.name.value
        const image =form.image.value
        const quantity =form.quantity.value
        const location =form.location.value
        const expireDate =form.expireDate.value
        const note =form.note.value
        form.reset()
        const food={name,image,quantity,location,expireDate,note,status:"Available",displayName,photoURL,email}
        axios.post('http://localhost:5000/addfood',food)
        .then(res=>{
            if(res.data.insertedId){
                toast("food added successfully")
            }
        })
    }
    return (
        <div>
         <div>
         <div className="hero h-[30vh]" style={{backgroundImage: 'url(https://i.ibb.co/djp3KXn/Colored-Shapes.png)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">#Together, we can end hunger</h1>
      
    </div>
  </div>
</div>
         </div>  
         <div className="py-10 shadow-xl bg-base-100">
            <h2 className="text-4xl text-orange-600 text-center p-10">ADD FOODS</h2>
            <form onSubmit={handleAddFood} className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:gap-6 p-4 mb-10 ">
            <input type="text" placeholder="FOOD NAME" name="name" className="input input-bordered input-warning " />
            <input type="text" placeholder="IMAGE URL" name="image" className="input input-bordered input-warning md:col-span-2 " />
            <input type="text" placeholder="QUANTITY" name="quantity" className="input input-bordered input-warning  " />
            <input type="text" placeholder="PICKUP LOCATION" name="location" className="input input-bordered input-warning  " />
            <input type="text" placeholder="EXPIRED DATE" name="expireDate" className="input input-bordered input-warning " />
            <input type="text" placeholder="ADDITIONAL NOTE" name="note" className="input input-bordered input-warning md:col-span-3 " />
            <input type="submit" value="ADD FOOD" name="" className="input input-bordered input-warning  text-orange-600 md:col-span-3" />
             
            </form>
         </div> 
         <ToastContainer />
        </div>
    );
};

export default AddFood;