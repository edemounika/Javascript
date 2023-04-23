import React ,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";// we are created lazy import 
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
// import Instamart from "./components/Instamart"; insted of write lazy import

//chunking
//lazyloading

const Instamart = lazy( () => import("./components/Instamart"));

const About = lazy( () => import("./components/About"));

const AppLayout = () => {

  //[user->Thisuser is dynamic it will modify according to my useEffect]
  const [user,setUser] = useState({ 
    name:"Mounika",
    email:"edemounika99@gmail.com",
  });
  return (
    <React.Fragment>
      <UserContext.Provider 
      value={{
        user:user,
        setUser:setUser,
        }}>
      <Header />
    {/* Outlet */}
     <Outlet/>
      <Footer />
      </UserContext.Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },

      {
        path:"/about",
        element:(
          <Suspense fallback={<h1>Loading....</h1>}>
        <About/>
        </Suspense>
        ),
        children:[

          {
          path: "profile",
          element:<Profile/>,
          },
        ],
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurent/:resId",
        element:<RestaurentMenu/>,
      },
      {
        path:"/instamart",
        element:(
          <Suspense fallback={<Shimmer/>}>
          <Instamart/>
        </Suspense>
        ),
      },
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);

