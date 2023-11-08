
import {AiOutlineDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const ManageMyFood = ({food,foods,setFoods}) => {
    const {_id,image,name,quantity,expireDate}=food
    const handleDelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/delete/${id}`)
                .then(res=>{
                    if(res.status===200){
                    {
                      const remaining= foods.filter(food=>food._id!==id)
                       setFoods(remaining)

                    }

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
             
            }
          });

    }
    return (
        
             <tr>
        <th>
        <button onClick={()=>handleDelete(_id)}><AiOutlineDelete></AiOutlineDelete></button>
        </th>
        <td>
         <img className='w-12 h-12 ' src={image} alt="" />
        </td>
        <td className='hidden md:block'>{name}</td>
        <td>
          {quantity}
        </td>
        <td>{expireDate}</td>
        <td>
        <Link to={`/updatefoods/${_id}`}>  <button className='btn btn-sm btn-outline text-orange-600'>Edit</button></Link>
        </td>
        <td>
            <Link to={`/managefoods/${_id}`}><button  className='btn btn-sm btn-outline text-orange-600'>Manage</button></Link>
        </td>
      </tr>
    );
};
ManageMyFood.propTypes={
    food:PropTypes.object,
    foods:PropTypes.array,
    setFoods:PropTypes.function
}
export default ManageMyFood;