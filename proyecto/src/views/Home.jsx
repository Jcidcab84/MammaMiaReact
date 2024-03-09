import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
import dataPizzas from "../pizzas.json";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(dataPizzas);
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4">Lista de Pizzas</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {pizzas.map((pizza) => (
          <Col key={pizza.id}>
            <Card>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>{pizza.desc}</Card.Text>
                <Card.Text>
                  <strong>Ingredientes:</strong>
                  <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Card.Text>Precio: {pizza.price}</Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="info" className="me-2">Ver más 👀</Button>
                  <Button variant="danger">Añadir 🛒</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
