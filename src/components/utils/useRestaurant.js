import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../../constants";

function useRestaurant(resId) {

    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const [restaurantList, setRestaurantList] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const response = await fetch(
            FETCH_MENU_URL + resId
        );
        const jsonData = await response.json();
        //console.log(jsonData.data.cards[0].card.card);
        setRestaurantMenu(jsonData?.data?.cards[0]?.card?.card);
        setRestaurantList(
            jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );
    }

    return [restaurantMenu, restaurantList];
}

export default useRestaurant;