import {Card,Button,} from "react-bootstrap"

export default function Card1(){
return(
<Card style={{ width: '18rem' }}>
  <Card.Img  className="imgCard" variant="top" src="./patagonia.png"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">+</Button>
    <Button variant="secondary">-</Button>
  </Card.Body>
</Card>
);
}