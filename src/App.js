import React, {useState, useEffect} from 'react';
import { Row, Col, InputGroup, Container, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/todos')
    .then((response) => {
      console.log(response.data)
      setTodos(response.data)
    })
  },[])

  return (
    <Container>
      <Row className="my-5">
        <Col md={{ span: 4, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Item"
              aria-label="Item"
            />
            <InputGroup.Append>
              <Button
                variant="info"

              >Submit</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <h3>ToDo list: </h3>
        <ul>
          {
            todos.map( (todo) => {
              return( <li key={todo.id}> {todo.item} </li> )
            })
          }
        </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
