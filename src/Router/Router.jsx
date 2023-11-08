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
import UpdateFood from "../NavComponent/Components/ManageMyFoods/UpdateFood";
import SingleManagedFood from "../NavComponent/Components/ManageMyFoods/SingleManagedFood";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/availablefoods/sorted2')
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
            element:<PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
        },
        {
            path:"/myfoodrequest",
            element:<PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>,
      
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
          element:<PrivateRoute><SingleFoodDetail></SingleFoodDetail></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/singleFoodDetail/${params.id}`)
        },
        {
          path:"/updatefoods/:id",
          element:<UpdateFood></UpdateFood>,
          loader:({params})=>fetch(`http://localhost:5000/singleFoodDetail/${params.id}`)
        },
        {
          path:"/managefoods/:id",
          element:<SingleManagedFood></SingleManagedFood>
        }
      ]
    },
  ]);
  export default router;