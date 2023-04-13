import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
    const { resData } = props;
    //console.log(props);
  
    const {cloudinaryImageId,name,cuisines,price,totalRatingsString}=resData?.data;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL +cloudinaryImageId}
        />
  
        <h3>{name}</h3>
        <h5>{cuisines}</h5>
        <h5>{price}</h5>
        <h5>{totalRatingsString}</h5>
        
      </div>
    );
  };
  export default RestaurantCard;