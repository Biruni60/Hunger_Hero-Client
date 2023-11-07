
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const AvailableFood = ({availableFood}) => {
    const {_id,name,image,displayName,photoURL,quantity,location,expireDate,note}=availableFood
    return (
        <div>
            <div className="card card-side border bg-base-100 md:h-full  shadow-xl">
  <figure className=" w-1/2   rounded-lg"><img className=" h-full w-full" src={image}/></figure>
  <div className="card-body flex-1">
    <p><span className="text-lg font-bold">Food Name: </span>{name}</p>
    <p><span className="text-lg font-bold">Quantity: </span>{quantity}</p>
    <p><span className="text-lg font-bold">Pickup Location: </span>{location}</p>
    <p><span className="text-lg font-bold">Expired Date: </span>{expireDate}</p>
    <p><span className="text-lg font-bold">Additional Note: </span>{note}</p>
    <p className="text-xl font-bold"> Donator,</p>
    <p className="flex gap-2"><img className="w-12 h-12 rounded-lg" src={photoURL} alt="" /> <span> {displayName}</span></p>
    <Link to={`/singleFoodDetail/${_id}`}><button className="w-full btn btn-outline text-orange-400">VIEW DETAIL</button></Link>
  </div>
</div>
        </div>
    );
};

AvailableFood.propTypes={
    availableFood:PropTypes.object
}
export default AvailableFood;