export default function CartIcon({count}){
    return(
    <div>
        <button className="botonCart">
        <img className="cartIcon" src="./shopping-cart.png" alt="iconoCarrito" />
        {count}
        </button>
    </div>
    
    );
}