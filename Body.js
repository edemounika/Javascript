import { useState, useEffect } from "react";
import { reastarantList } from "../constants";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import RestaurantMenu from "./RestaurentMenu";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allReastarant, setAllReastarant] = useState([]);
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
  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1> offline ,Pleace check your Internet Connection</h1>;
  // }

  if (!allReastarant) return null;

  // const searchBtnCSS = {
  //   backgroundColor:"red",
  // };

  // if (Filteredreastarants?.length == 0) return <h1>No Restaurant Match your filter !!</h1>

  return allReastarant.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="Search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-zinc-400 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button 
        className="p-2 m-2 bg-purple-300 hover:bg-purple-700 text-black rounded-lg"
          
          onClick={() => {
            const data = filterData(searchText, allReastarant);
            setFilteredreastarants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {Filteredreastarants.map((reastarant) => {
          return (
            <Link
              to={"/restaurent/:resId" + reastarant.data.id}
              key={reastarant.data.id}
            >
              <RestaurentCard {...reastarant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;

