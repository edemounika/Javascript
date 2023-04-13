// import React from "react";
// import ReactDOM from "react-dom/client";

// /**
//  * Header:
//  * -Logo
//  * -body
//  * -footer
//  */

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://t4.ftcdn.net/jpg/04/72/77/23/360_F_472772347_bkOBqw8LV2bcx47nTdTpTprWCrNs2Vx5.jpg"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = (props) => {
//   const { resData } = props;
//   //console.log(props);
//   return (
//     <div className="res-card">
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           resData.data.cloudinaryImageId
//         }
//       />

//       <h3>{resData.data.name}</h3>
//       <h5>{resData.data.cuisines}</h5>
//       <h5>{resData.data.price}</h5>
//       <h5>{resData.data.totalRatingsString}</h5>
      
//     </div>
//   );
// };

// // const resObj = {
// //   type: "restuarent",
// //   data: {
// //     type: "A",
// //     id: "2299",
// //     name: "kfc",
// //     cloudineryImageId: "g1arzw6qd7g9affkmgzk",
// //     cuisine: ["chiken bones,Fastfood,Biryani, south India"],
// //     price: "R400",
// //     averageRating: "3.5 ***",
// //   },
// // };

// const resList = [
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "214809",
//       name: "Hotel Niagara",
//       uuid: "d8a51204-2047-4372-820f-7c0885e4130c",
//       city: "3",
//       area: "Chaderghat",
//       price:"R 400",
//       totalRatingsString: "10000+ ratings",
//       cloudinaryImageId: "g1arzw6qd7g9affkmgzk",
//       cuisines: ["Haleem", "Biryani", "North Indian"],
//     },
//   },
//   {

//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "4320",
//       name: "Mehfil",
//       uuid: "4dee4970-8673-42b6-8a49-cab0efdb258f",
//       city: "3",
//       area: "Narayanguda",
//       price:"R450",
//       totalRatingsString: "10000+ ratings",
//       cloudinaryImageId: "qems028i3da5rxf81rbp",
//       cuisines: ["Biryani, North Indian, Tandoor, Chinese, Kebabs"],
//     }
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "214809",
//       name: "Meridian Restaurant",
//       uuid: "41eab84b-b00a-457d-80c8-5a62fadc4790",
//       city: "3",
//       area: "Chaderghat",
//       price:"R 400",
//       totalRatingsString: "10000+ ratings",
//       cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
//       cuisines: ["Biryani",
//       "Chinese",
//       "North Indian",
//       "Kebabs"],
//     },
//   },
  
// ];
// console.log(resList);

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="res-container">
//         <RestaurantCard resData={resList[0]} />
//         <RestaurantCard resData={resList[1]} />
//         <RestaurantCard resData={resList[2]} />

//       </div>
//     </div>
//   );
// };

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

// ***********************************************************************************************************
// using props, and map (map key)

import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header:
 * -Logo
 */
//Good way to right destructuring .

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t4.ftcdn.net/jpg/04/72/77/23/360_F_472772347_bkOBqw8LV2bcx47nTdTpTprWCrNs2Vx5.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(props);

  const {cloudinaryImageId,name,cuisines,price,totalRatingsString}=resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />

      <h3>{name}</h3>
      <h5>{cuisines}</h5>
      <h5>{price}</h5>
      <h5>{totalRatingsString}</h5>
      
    </div>
  );
};

// const resObj = {
//   type: "restuarent",
//   data: {
//     type: "A",
//     id: "2299",
//     name: "kfc",
//     cloudineryImageId: "g1arzw6qd7g9affkmgzk",
//     cuisine: ["chiken bones,Fastfood,Biryani, south India"],
//     price: "R400",
//     averageRating: "3.5 ***",
//   },
// };

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "214809",
      name: "Hotel Niagara",
      uuid: "d8a51204-2047-4372-820f-7c0885e4130c",
      city: "3",
      area: "Chaderghat",
      price:"R 400",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "g1arzw6qd7g9affkmgzk",
      cuisines: ["Haleem", "Biryani", "North Indian"],
    },
  },
  {

    type: "restaurant",
    data: {
      type: "F",
      id: "4320",
      name: "Mehfil",
      uuid: "4dee4970-8673-42b6-8a49-cab0efdb258f",
      city: "3",
      area: "Narayanguda",
      price:"R450",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "qems028i3da5rxf81rbp",
      cuisines: ["Biryani, North Indian, Tandoor, Chinese, Kebabs"],
    }
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "214888",
      name: "Meridian Restaurant",
      uuid: "41eab84b-b00a-457d-80c8-5a62fadc4790",
      city: "3",
      area: "Chaderghat",
      price:"R 400",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
      cuisines: ["Biryani",
      "Chinese",
      "North Indian",
      "Kebabs"],
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "214870",
      name: "Bawachi",
      uuid: "41eab84b-b00a-457d-80c8-5a62fadc4790",
      city: "3",
      area: "Chaderghat",
      price:"R 400",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "esp0fhddgfgdss5hyhpi",
      cuisines: ["Biryani",
      "Chinese",
      "North Indian",
      "Kebabs"],
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "214871",
      name: "kritinga",
      uuid: "41eab84b-b00a-457d-80c8-5a62fadc4790",
      city: "3",
      area: "Chaderghat",
      price:"R 400",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "btea7jwuwkbgd0nebcyd",
      cuisines: ["Biryani",
      "Chinese",
      "North Indian",
      "Kebabs"],
    },
  },
  
];
console.log(resList);

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} /> */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id}resData = {restaurant} />
        ))}

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
