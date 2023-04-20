import { useState, useEffect } from "react";
import { reastarantList } from "../constants";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import RestaurantMenu from "./RestaurentMenu";

function filterData(searchText, reastarants) {
  const filterData = reastarants.filter((reastarant) =>
    reastarant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allReastarant,setAllReastarant] = useState([]);
  const [Filteredreastarants, setFilteredreastarants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllReastarant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredreastarants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  if (!allReastarant) return null ;

  // if (Filteredreastarants?.length == 0) return <h1>No Restaurant Match your filter !!</h1>

  return allReastarant.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="Search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allReastarant);
            setFilteredreastarants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restuarant-list">
        {Filteredreastarants.map((reastarant) => {
          return (
            <Link to ={"/restaurent/:resId" + reastarant.data.id} key={reastarant.data.id}>
            <RestaurentCard {...reastarant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
