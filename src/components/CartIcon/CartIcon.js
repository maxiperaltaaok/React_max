import { useState } from "react";
import { products } from "../data/products";

export default function CartIcon({count}){
    const [cart, setCart] = useState([])

    return(
        <>
    <div>
        <button className="botonCart">
        <img className="cartIcon" src="./shopping-cart.png" alt="iconoCarrito" />
        {count}
        </button>
    </div>

    {products.map((producto)=> (
    <producto
    key={products.id}
    producto={producto}
    cart={cart}
    setCart={setCart}
    products={products}
    />
)       )}
</>
    );
}