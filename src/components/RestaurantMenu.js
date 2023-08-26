import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerCard from "./shimmer";
import { addItem } from "./utils/cartSlice";
import useRestaurant from "./utils/useRestaurant";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantMenu, restaurantList] = useRestaurant(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }

    return !restaurantList && !restaurantMenu ? (
        <ShimmerCard />
    ) : (
        <div className="restaurant-menu flex justify-around m-20 gap-52">
            <div>
                <h1 className="text-4xl font-bold">{restaurantMenu?.info?.name}</h1>
                <img
                    className="py-10 rounded-full"
                    src={IMG_CDN_URL + restaurantMenu?.info?.cloudinaryImageId}
                />
                <h3 className="text-xl font-semibold">{restaurantMenu?.info?.cuisines.join(", ")}</h3>
                <h3 className="text-xl">
                    {restaurantMenu?.info?.areaName +
                        ", " +
                        restaurantMenu?.info?.sla?.lastMileTravelString}
                </h3 >
                <h3 className="text-xl">{"Rating: " + restaurantMenu?.info?.avgRating}</h3>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Menu</h1>
                {restaurantList.map((heading) => {
                    const { title, categories, itemCards } = heading.card.card;

                    return title && itemCards ? (
                        <div>
                            <h3 className="text-2xl font-semibold" >{title}</h3>
                            {categories ? (
                                <>
                                    {categories.map(({ title, itemCards }) => (
                                        <div key={title}>
                                            <h4 className="text-xl font-semibold">{title}</h4>
                                            <ul className="flex flex-col gap-3">
                                                {itemCards.map(({ card }) => (
                                                    <div className="flex justify-between">
                                                        <li key={card.info.id}>
                                                            {card.info.name}
                                                        </li>
                                                        <button className="bg-orange-500 text-white rounded-sm text-sm px-1" onClick={() => addFoodItem(card)}>Add</button>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <ul className="flex flex-col gap-2">
                                    {itemCards &&
                                        itemCards.map(({ card }) => (
                                            <div className="flex justify-between">
                                                <li key={card.info.id}>
                                                    {card.info.name}
                                                </li>
                                                <button className="bg-orange-500 text-white rounded-sm text-sm px-1" onClick={() => addFoodItem(card)}>Add</button>
                                            </div>
                                        ))}
                                </ul>
                            )}
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;
