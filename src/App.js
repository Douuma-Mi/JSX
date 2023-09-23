import './App.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Price from './Price';
import Des from './Des';
import Name from './Name';
import Image from './Image';
function App() {
  let name=""
  return (
    <Card style={{ width: '18rem' }}>
      
      <Image/>

      <Card.Body>
        <Card.Title> <Name/>
</Card.Title>
        <Card.Text>
        <Des/>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> <Price/>
  { name?`hello ${name}`:"hello there!"}
</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>


    
  );
}

export default App;
