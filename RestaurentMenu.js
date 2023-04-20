import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=40377&submitAction=ENTER" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.cards[0].card.card.info.name}</h2>
        <img
          src={
            IMG_CDN_URL + restaurant?.cards[0].card.card.info.cloudinaryImageId
          }
          alt="restaurent image"
          width={200}
        />
        <h3>{restaurant?.cards[0].card.card.info.city}</h3>
        <h3>{restaurant?.cards[0].card.card.info.avgRating} stars</h3>
        <h3>{restaurant?.cards[0].card.card.info.costForTwoMessage}</h3>
        <div>
        <h1>Menu</h1>
       <ul>
         {Object.values(restaurant?.cards[0].card?.card?.info).map((info) => (
           <li key={info.id}>{info.name}</li>
          ))}
       </ul>
      </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

