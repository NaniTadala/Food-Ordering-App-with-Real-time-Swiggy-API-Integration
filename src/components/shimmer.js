import { restaurantList } from "../constants";

// import "../../styles.css";

const ShimmerCard = () => {
    const shimmerCards = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="card shimmer-card"></div>
    ));

    return <div className="restaurant-cards flex justify-start flex-wrap gap-10 px-10 ">{shimmerCards}</div>;
};

export default ShimmerCard;
