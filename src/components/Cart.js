import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const removeAllItems = () => {
        dispatch(clearCart())
    }

    return (
        <>
            <div className="flex mx-40 my-20 gap-20 flex-wrap">
                {cartItems.map((item) => (
                    <FoodItem key={item.info.id} {...item.info} />
                ))}
            </div>
            {cartItems.length === 0 ? null :
                <div className="w-full text-center">
                    <button onClick={() => removeAllItems()} className="mx-auto rounded-md px-2 py-1 border border-black">Clear All</button>
                </div>
            }
        </>
    )

}

export default Cart;