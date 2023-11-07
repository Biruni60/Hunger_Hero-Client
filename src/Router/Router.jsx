import  Root  from "../Home/Root";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Error from "../Error/Error";
import Home from "../Home/Home";
import AvailableFoods from "../NavComponent/Components/AvailableFood/AvailableFoods";
import ManageMyFoods from "../NavComponent/Components/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../NavComponent/Components/MyFoodRequest/MyFoodRequest";
import AddFood from "../NavComponent/Components/Add Food/AddFood";
import SignIn from "../UserAuth/SignIn";
import SignUp from "../UserAuth/SignUp";
import PrivateRoute from "../Private Route/Private Route";
import SingleFoodDetail from "../NavComponent/Components/AvailableFood/SingleFoodDetail/SingleFoodDetail";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/availablefoods",
            element:<AvailableFoods></AvailableFoods>,
            loader:()=>fetch("http://localhost:5000/availablefoods")
        },
        {
            path:"/addfood",
            element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path:"/managemyfoods",
            element:<ManageMyFoods></ManageMyFoods>
        },
        {
            path:"/myfoodrequest",
            element:<MyFoodRequest></MyFoodRequest>
        },
        {
            path:"/signin",
            element:<SignIn></SignIn>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
          path:"/singleFoodDetail/:id",
          element:<SingleFoodDetail></SingleFoodDetail>,
          loader:({params})=>fetch(`http://localhost:5000/singleFoodDetail/${params.id}`)
        }
      ]
    },
  ]);
  export default router;