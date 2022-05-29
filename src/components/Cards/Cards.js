import React from "react";
import {Card,Button,} from "react-bootstrap"
import {Products1} from "../data/products";
import { useParams } from "react-router-dom";




export default function Card1 ({producto}){
  const{categoryId} = useParams(); 
  React.useEffect(()=>{
  },[]);
  const [text,] = React.useState()
  const [count, setCount] = React.useState(0) 
  const  handleRest = () => {
    if(count > 0){
      setCount (count -1 )
    }
  }
/*const task = new Promise ((resolve, reject)=> {
  setTimeout(()=>{
    resolve(products); 
  },4000)

})
  task.then((results) => {
    console.log(results)
  })*/
  
return(  
  <>
 <div className="CardsDsiplay">
 {Products1.map((product, i) => {

return (
  <div key ={product.id}>
  <Card style={{ width: '18rem' }}>
  <Card.Img  className="imgCard" variant="top" src={product.image}/>
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
      Price: {product.price}<br></br>
      Stock: {product.stock}
      <div className="botones">
    <Button className="claseBoton" variant="primary" onClick={()=> setCount(count + 1)}>Agregar</Button>
    {count}
    <Button variant="secondary"  onClick={handleRest}>Quitar</Button>
    </div>
    </Card.Text>
    </Card.Body>
    
</Card> 
  </div>
  )})}
</div>
{text}

</>

);
}