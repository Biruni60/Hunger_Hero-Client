import axios from "axios";
import PropTypes from "prop-types"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyFoodDetail = ({food,setFoods,foods}) => {
    const handleCancel=(id,status)=>{
    if(status==="Delivered"){
      return toast("Already delivered.Cant Cancel")
    }
    axios.delete(`https://donate-food-server.vercel.app/cancel/${id}`,{withCredentials:true})
    .then(res=>{
        if(res.status===200){
        
          const remaining= foods.filter(food=>food._id!==id)
           setFoods(remaining)

        }})
    }
    return (
        <div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
  <p><span className="text-lg font-bold">Donator Name: </span>{food.donatorName}</p>
  <p><span className="text-lg font-bold">Location: </span>{food.location}</p>
  <p><span className="text-lg font-bold">Expire Date </span>{food.expireDate}</p>
  <p><span className="text-lg font-bold">Request Date: </span>{food.requestDate}</p>
  <p><span className="text-lg font-bold">Donation </span>${food.donation}</p>
  <p><span className="text-lg font-bold">Status: </span><span className=" text-orange-400">{food.status}</span></p>
  <button onClick={()=>handleCancel(food._id,food.status)}  className="btn btn-outline text-orange-600">Cancel Request</button>
  </div>
</div>   
<ToastContainer />
        </div>
    );
};
MyFoodDetail.propTypes={
    food: PropTypes.object,
    foods: PropTypes.array,
    setFoods: PropTypes.function
}
export default MyFoodDetail;