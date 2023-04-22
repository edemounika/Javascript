import { IMG_CDN_URL } from "../constants";
// const RestaurentCard = ({
//     name,
//     cuisines,
//     cloudinaryImageId,
//     totalRatingsString,
//   }) => {
//     return (
//       <div className="card">
//         <img
//           src={
//             IMG_CDN_URL+
//             cloudinaryImageId
//           }
//         />
//         <h2> {name}</h2>
//         <h4>{cuisines.join(",")}</h4>
//         <h5>{totalRatingsString}</h5>
//       </div>
//     );
//   };
//   export default RestaurentCard;

// import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="w-40 p-2 m-5 shadow-lg bg-pink-100">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-xl">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <h4>{lastMileTravelString}</h4>
      
      <h4>{costForTwoString}</h4>
    </div>
  );
};

export default RestaurantCard;

