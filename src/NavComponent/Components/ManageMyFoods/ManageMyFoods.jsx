import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../UserAuth/AuthProvider";
import axios from "axios";
import ManageMyFood from "./ManageMyFood";

const ManageMyFoods = () => {
    const{user}=useContext(AuthContext)
    const [foods,setFoods]=useState([])
    const url=`http://localhost:5000/managefoods?email=${user?.email}`
    useEffect(()=>{
        axios.get(url)
        .then(res=>setFoods(res.data))
       
    },[url])
    
    return (
        <div>
            <div >
  <table  className=" max-w-screen-sm md:max-w-3xl md:mx-auto overflow-hidden">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
           Delete
          </label>
        </th>
        <th className="">Image</th>
        <th className="hidden md:block">Name</th>
        <th>Quantity</th>
        <th>Expire Date</th>
        <th>
          Edit
        </th>
        <th>
          Manage
        </th>
      </tr>
    </thead>
    <tbody>
     {
        foods && foods.map(food=><ManageMyFood key={food._id} food={food} foods={foods} setFoods={setFoods}></ManageMyFood>)
     }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default ManageMyFoods;