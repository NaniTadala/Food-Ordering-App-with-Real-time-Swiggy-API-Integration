const FoodItem = ({ name, price, imageId }) => {
    const FOOD_IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

    return (
        <div>
            <div className="card w-80 rounded-md shadow-xl h-96 relative">
                <img className="card-img rounded-md w-full" src={FOOD_IMG_CDN_URL + imageId} />
                <div className="p-5 ">
                    <h3 className="text-xl font-bold" >{name}</h3>
                    <h4>Rs. {price / 100}</h4>
                </div>
            </div>
        </div>
    )
}

// <div>
//             <div className="card w-80 rounded-md shadow-xl h-96 relative">
//                 <img className="card-img rounded-md w-full" src={FOOD_IMG_CDN_URL + cloudinaryImageId} />
//                 <div className="p-5 ">
//                     <h3 className="text-xl font-bold" >{name}</h3>
//                     <h4>{cuisines.join(", ")}</h4>
//                     <div className="card-details absolute bottom-5 left-5 right-5 flex justify-between font-medium">
//                         <h5>{"Rating: " + avgRating}</h5>
//                         <h5>{slaString}</h5>
//                         <h5>{costForTwoString}</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>

export default FoodItem;