import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {
//react state variable
const [listOfRestaurant,setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic using hook 
            const filterdList= listOfRestaurant.filter(
              (res) => res.data.totalRatingsString > 4
            );
           setListOfRestaurant(filterdList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
<h1></h1>
