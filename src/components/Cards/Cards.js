import React from "react";
import {Card,Button,} from "react-bootstrap"
import {products} from "../data/products";


export default function Card1 ({producto}){
  const [text,] = React.useState()
  const [count, setCount] = React.useState(0)
  const  handleRest = () => {
    if(count > 0){
      setCount (count -1 )
    }
  }

const task = new Promise ((resolve, reject)=> {
  setTimeout(()=>{
    resolve(products); 
  },4000)

})
  
  task.then((results) => {
    console.log(results)
  })   
  
return(
  <>
  <div className="CardsDsiplay">
  {products.map((product, i) => {
return (
  <div key ={i}>
  <p>{product.title}</p>
  </div>
  )})}
<Card style={{ width: '18rem' }}>
  <Card.Img  className="imgCard" variant="top" src="./patagonia.png"/>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
      Price: 
      Stock: 
    </Card.Text>
    <div className="botones">
    <Button className="claseBoton" variant="primary" onClick={()=> setCount(count + 1)}>Agregar</Button>
    {count}
    <Button variant="secondary"  onClick={handleRest}>Quitar</Button>
    </div>
  </Card.Body>
</Card> 

</div>
{text}

</>
);
}