import React, { useEffect } from "react" 
import ItemList from '../ItemList/ItemList';
import {products} from "../data/products";
   export default function ItemListContainer(){
        const[item, setItem] = React.useState([])
        useEffect( () => {
        const getItem = new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve(products);
            },4000)
        }).then(() => {
            console.log("getItem")
            setItem(products[2]);
        }) 
        
    },[])
    return (
        <>           
            <ItemList item = {item} />
        </>   
    )
}
