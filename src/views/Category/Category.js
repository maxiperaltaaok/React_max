import { Products1 } from "../../components/data/products"
import Navbar1 from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
export default function Category (){
const {id} = useParams();
console.log(id);
    return(
    <div>
        <Navbar1/>
        <h1>Listado de productos</h1>
        <Products1/>
    </div>

    );  
}