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
            element:<AvailableFoods></AvailableFoods>
        },
        {
            path:"/addfood",
            element:<AddFood></AddFood>
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
      ]
    },
  ]);
  export default router;