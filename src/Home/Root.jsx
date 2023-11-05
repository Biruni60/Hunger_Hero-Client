import { Outlet } from "react-router-dom";
import Navbar from "../NavComponent/Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className=" max-w-screen-xl mx-auto">
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;