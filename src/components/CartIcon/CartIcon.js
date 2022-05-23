import { useState } from "react";
import { Products1 } from "../data/products";

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

    {Products1.map((producto)=> (
    <producto
    key={producto.id}
    producto={producto}
    cart={cart}
    setCart={setCart}
    Products1={Products1}
    />
)       )}
</>
    );
}