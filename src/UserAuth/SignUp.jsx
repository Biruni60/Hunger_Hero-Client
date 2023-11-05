import { Link } from "react-router-dom";
import img from "../assets/image/login.svg"
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
    const {createUser}=useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        form.reset()
        createUser(email,password)
        .then(result=>console.log(result.user))
        .catch(error=>console.log(error.message))

    }
    return (
        <div>
            <div className=" py-16  w-full bg-[url('https://i.ibb.co/thVTYGY/Simple-Shiny-1.png')]">
  <div className="hero-content flex-col gap-10 lg:flex-row">
    <img src={img} className="h-full rounded-lg shadow-2xl" />
    <div className="w-1/2 space-y-2">
    <h2 className="text-center text-3xl font-semibold text-white">REGISTER NOW</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <p className="text-white text-xl">Email</p>
         <input type="email" name="email"  className="input input-bordered input-error w-full" />
         <p className="text-white text-xl">Password</p>
         <input type="password" name="password"  className="input input-bordered input-error w-full" />
         <input type="submit" value="REGISTER" className="btn btn-outline text-white w-full"/>
      </form>
       <div className="flex justify-between items-center">
        <p className="text-white">Already have a account?</p>
       <Link to="/login"> <button className="btn btn-outline text-white">LOGIN</button></Link>
       </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;