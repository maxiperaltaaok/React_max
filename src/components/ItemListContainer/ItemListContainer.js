import React, { useEffect } from "react" 
import ItemList from '../ItemList/ItemList';
import {Products1} from "../data/products";
   export default function ItemListContainer(){
        const[item, setItem] = React.useState([])
        useEffect( () => {
        const getItem = new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve();
            },4000)
        }).then(() => {
            console.log(getItem)
            setItem(Products1[2]);
        }) 
        
    },[])
    return (
        <>           
            <ItemList item = {item} />
        </>   
    )
}
