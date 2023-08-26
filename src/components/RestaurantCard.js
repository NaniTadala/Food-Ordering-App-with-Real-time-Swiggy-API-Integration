import { IMG_CDN_URL } from "../constants";
import userContext from "./utils/userContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
    const { user } = useContext(userContext);
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        sla,
        costForTwo,
    } = props.restaurant;
    return (
        <div className="card w-80 rounded-md shadow-xl h-96 relative">
            <img className="card-img rounded-md w-full" src={IMG_CDN_URL + cloudinaryImageId} />
            <div className="p-5 ">
                <h3 className="text-xl font-bold" >{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <div className="card-details absolute bottom-5 left-5 right-5 flex justify-between font-medium">
                    <h5>{"Rating: " + avgRating}</h5>
                    <h5>{sla.slaString}</h5>
                    <h5>{costForTwo.toUpperCase()}</h5>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
