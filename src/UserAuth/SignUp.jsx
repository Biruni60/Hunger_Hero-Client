import { Link } from "react-router-dom";
import img from "../assets/image/login.svg"
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
    const {createUser,updateUser}=useContext(AuthContext)
    const [success,setSuccess]=useState('')
    const [registerError,setRegisterError]=useState('')
    const handleRegister=e=>{
        e.preventDefault();
        const form=e.target;
        const name =form.name.value
        const image=form.image.value
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,image);
        form.reset()
        setRegisterError("")
        setSuccess('')
        if(! /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            setRegisterError("min 8 letter password, with at least a symbol, upper and lower case letters and a number")
            return
        }
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess("user created successfully")
         updateUser(name,image)
         .then(()=>{
            console.log('user updated succesfully');
         })
         .catch(error=>{
            console.log(error.message);
         })
        })
        .catch(error=>setRegisterError(error.message))
    }
    return (
        <div>
            <div className=" py-16  w-full bg-[url('https://i.ibb.co/thVTYGY/Simple-Shiny-1.png')]">
  <div className="hero-content flex-col gap-10 lg:flex-row">
    <img src={img} className="h-full rounded-lg shadow-2xl" />
    <div className="w-1/2 space-y-2">
    <h2 className="text-center text-3xl font-semibold text-white">REGISTER NOW</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <p className="text-white text-xl">Name</p>
         <input type="text" name="name"  className="input input-bordered input-error w-full" required />
        <p className="text-white text-xl">Photo Url</p>
         <input type="text" name="image"  className="input input-bordered input-error w-full" required />
        <p className="text-white text-xl">Email</p>
         <input type="email" name="email"  className="input input-bordered input-error w-full" required />
         <p className="text-white text-xl">Password</p>
         <input type="password" name="password"  className="input input-bordered input-error w-full" required />
         <input type="submit" value="REGISTER" className="btn btn-outline text-white w-full"/>
      </form>
       <div className="flex justify-between items-center">
        <p className="text-white">Already have a account?</p>
       <Link to="/signin"> <button className="btn btn-outline text-white">LOGIN</button></Link>
       </div>
       <div>
        <p className="text-white">{success}</p>
        <p className="text-white">{registerError}</p>
        </div>
    </div>
  </div>
</div>
       </div>
    );
};

export default SignUp;