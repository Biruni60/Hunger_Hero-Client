import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center max-w-screen-xl mx-auto">
           <Link to='/'><button className="btn btn-outline text-sky-800 my-4">RETURN HOME</button></Link>
            <img className="h-[90vh]  w-full" src="https://i.ibb.co/Hd4YXXV/3828537-1.jpg"/>
        </div>
    );
};

export default Error;