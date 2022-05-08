import React from "react";
import {Card,Button,} from "react-bootstrap"


export default function Card1(){
  const [text,] = React.useState()
  const [count, setCount] = React.useState(0)
  const  handleRest = () => {
    if(count > 0){
      setCount (count -1 )
    }
  }
return(
  <>
  <div className="CardsDsiplay">
<Card style={{ width: '18rem' }}>
  <Card.Img  className="imgCard" variant="top" src="./patagonia.png"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Patagonia Craft Drinks
    </Card.Text>
    <div className="botones">
    <Button className="claseBoton" variant="primary" onClick={()=> setCount(count + 1)}>Agregar</Button>
    {count}
    <Button variant="secondary"  onClick={handleRest}>Quitar</Button>
    </div>
  </Card.Body>
</Card> 
<Card style={{ width: '18rem' }}>
  <Card.Img  className="imgCard" variant="top" src="./patagonia 3.png"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Patagonia Craft Drinks
    </Card.Text>
    <div className="botones">
    <Button className="claseBoton" variant="primary" onClick={()=> setCount(count + 1)}>Agregar</Button>
    {count}
    <Button variant="secondary"  onClick={handleRest}>Quitar</Button>
    </div>
  </Card.Body>
</Card> 
<Card style={{ width: '18rem' }}>
  <Card.Img  className="imgCard" variant="top" src="./patagonia1.png"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Patagonia Craft Drinks
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