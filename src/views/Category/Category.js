import { Products1 } from "../../components/data/products"
import { useParams } from "react-router-dom";
export default function Category (){
const {id}= useParams();
console.log(id);
    return(
    <div>
        <h1>Listado de productos</h1>
        <Products1/>
    </div>

    );  
}