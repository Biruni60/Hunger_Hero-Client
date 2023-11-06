import { useContext } from "react";
import PropTypes from "prop-types"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../UserAuth/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/signin" state={location.pathname}></Navigate>
}
PrivateRoute.propTypes={
    children:PropTypes.node
}
export default PrivateRoute;