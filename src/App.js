import React, { useState, useEffect } from 'react';
import { Row, Col, InputGroup, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todos')) || []
    setTodos(todoList)
  }, [])

  const handleChange = (event) => {
    let { value } = event.currentTarget;
    setTodo(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoList = todos
    todoList.push(todo)
    localStorage.setItem('todos', JSON.stringify(todoList))
    setTodos([...todoList])
    setTodo('')
  };

  return (
    <Container>
      <Row className="my-5">
        <Col md={{ span: 4, offset: 4 }}>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Item"
                aria-label="Item"
                id="todo"
                name="todo"
                value={todo}
                onChange={handleChange}
                autoFocus
              />
              <InputGroup.Append>
                <Button
                  variant="info"
                  type="submit"
                >Submit</Button>
              </InputGroup.Append>
            </InputGroup>
          </form>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h3>ToDo list: </h3>
          <ul>
            {
              todos.map((todo, index) => {
                return (
                  <li key={index}>
                    {todo}
                  </li>
                )
              })
            }
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
