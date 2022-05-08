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
<Card style={{ width: '18rem' }}>
  <Card.Img  className="imgCard" variant="top" src="./patagonia.png"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Patagonia Craft Drinks
    </Card.Text>
    <Button variant="primary" onClick={()=> setCount(count + 1)}>+</Button>
    {count}
    <Button variant="secondary"  onClick={handleRest}>-</Button>
  </Card.Body>
</Card> 
{text}
</>
);
}