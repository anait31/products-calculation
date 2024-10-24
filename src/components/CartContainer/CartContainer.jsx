import Cart from "../Cart/Cart";
import { useState } from "react";
import Details from "../Details/Details";
import './CartContainer.css'

const CartContainer = ({products, handleDeleteProduct}) => {
    const [isActive, setIsActive] = useState({
        cart: true,
        details: 'active'
    })

    const handleActiveCart = (status) => {
        if (status === 'cart') {
            setIsActive({
                cart: true,
                details: 'active'
            })
        }
        else {
            setIsActive({
                cart: false,
                details: 'active'
            })
        }
    }
    return (
        <div className="w-1/3">
            <h2 className="text-center text-4xl font-semibold mb-5">Cart Information</h2>
            <div className="flex justify-around text-2xl font-semibold">
                <button className={`${isActive.cart ? 'btn-active' : ''}`} onClick={() => handleActiveCart('cart')}>Cart</button>
                <button className={`${isActive.cart ? '' : 'btn-active'}`} onClick={() => handleActiveCart('details')}>Details</button>
            </div>
            {
                isActive.cart ? <Cart 
                handleDeleteProduct={handleDeleteProduct}
                products={products}></Cart> : <Details></Details>
            }
        </div>
    );
};

export default CartContainer;