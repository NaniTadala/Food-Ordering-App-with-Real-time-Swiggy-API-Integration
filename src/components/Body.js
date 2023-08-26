import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./shimmer";
import filterData from "./utils/filterData";
import userContext from "./utils/userContext";

// BODY COMPONENTS

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        getRestaurants()
    }, []);

    async function getRestaurants() {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9623047&lng=82.21175679999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const jsonData = await response.json();
            setRestaurants(jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredRestaurants(jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        } catch (error) {
            console.log(error);
        }
    }

    if (!allRestaurants) return null;


    return (
        <div className="w-4/5 m-auto">
            <div className="search-container flex justify-center py-10">
                <input
                    className="border border-neutral-400 p-2 rounded-md rounded-r-none"
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <button
                    className="border border-orange-500 p-2 rounded-md text-white bg-orange-500 rounded-l-none"
                    type="button"
                    onClick={() => {
                        setFilteredRestaurants(filterData(allRestaurants, searchText))
                    }}
                >
                    Search
                </button>
            </div>

            {
                allRestaurants.length === 0 ? (<ShimmerCard />) :
                    (filteredRestaurants.length === 0 ? <h1>No Restaurants found</h1> :
                        <div className="restaurant-cards flex justify-start flex-wrap gap-10 px-10">
                            {filteredRestaurants.map((restaurant) => {
                                console.log(restaurant.info)
                                return (
                                    <Link to={"/restaurants/" + restaurant.info.id}>
                                        <RestaurantCard key={restaurant.info.id} restaurant={restaurant.info} />
                                    </Link>
                                )
                            })}
                        </div>)
            }
        </div>
    );
};

export default Body;