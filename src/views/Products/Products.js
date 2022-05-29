import Navbar1 from "../../components/Navbar/Navbar";
import { Products1 } from "../../components/data/products"
export default function Products (){

    return(
    <div>
        <Navbar1 />
        <h1>Listado de productos</h1>
        <Products1/>
    </div>
    );  
}