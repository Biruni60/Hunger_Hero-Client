import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../NavComponent/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";


const Root = () => {
    const location=useLocation();
    useEffect(()=>{
        document.title=`HUNGERHEROS${location.pathname}`
        
    },[location])
    return (
        <div className=" max-w-screen-xl mx-auto">
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;