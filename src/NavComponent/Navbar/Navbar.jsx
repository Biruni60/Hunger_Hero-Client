import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../UserAuth/AuthProvider";
const Navbar = () => {
    const {user,logOut} =useContext(AuthContext)
    const handleSignOut=()=>{
       logOut()
       .then(()=>console.log("log Out successful"))
       .catch(error=>console.log(error.message))
    }
    const links=<>
        <li className="mr-4 "><NavLink to="/">HOME</NavLink></li>
        <li className="mr-4 "><NavLink to="/availablefoods">AVAILABLE FOODS</NavLink></li>
        <li className="mr-4 "><NavLink to="/addfood">ADD FOOD</NavLink></li>
        <li className="mr-4 "><NavLink to="/managemyfoods">MANAGE MY FOODS</NavLink></li>
        <li className="mr-4 "><NavLink to="/myfoodrequest">MY FOOD REQUEST</NavLink></li>
       {user?<button onClick={handleSignOut} className="mx-3">SIGN OUT</button>: <li className="mr-4 "><NavLink to="/signin">SIGN IN</NavLink></li>}
    </>
    return (
        <div className="navbar flex pr-10 lg:p-2 justify-between items-center pt-2 lg:py-10">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-60 ">
             {
                links
             }
            </ul>
          </div>
         <Link to="/" className="text-red-600  text-lg md:text-3xl font-semibold">HUNGER HEROS</Link>
        </div>
        <div className=" hidden  lg:text-xl lg:flex">
          <ul className=" menu-horizontal flex items-center  px-1 text-center">
          {
            links
          }
          </ul>
        </div>
        <div className="">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
<button onClick={()=>document.getElementById('my_modal_1').showModal()}><img className="w-12 rounded-full" src={user? user.photoURL:"https://i.ibb.co/0YBhvhw/832-1.jpg" }></img> </button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    {
        user? <div><p>{user.displayName}</p>
    <p>{user.email}</p></div>: <p>PLEASE SIGN IN</p>
    }
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
      </div>
    );
};

export default Navbar;