import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Product.css";

const productsSet1 = [
  {
    id: 1,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine1.png",
  },
  {
    id: 2,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine1.png",
  },
  {
    id: 3,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine1.png",
  },
  {
    id: 4,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine1.png",
  },
];

const productsSet2 = [
  {
    id: 5,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine2.png",
  },
  {
    id: 6,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine2.png",
  },
  {
    id: 7,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine2.png",
  },
  {
    id: 8,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine2.png",
  },
];

const productsSet3 = [
  {
    id: 9,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Description for product 9",
    image: "/wine1.png",
  },
  {
    id: 10,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine1.png",
  },
  {
    id: 11,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine1.png",
  },
  {
    id: 12,
    name: "Francis Ford Coppola Director's Cut Chardonnay 2021",
    description: "Chardonnay | California",
    image: "/wine1.png",
  },
];

const Products = () => {
  return (
    <Container className="product-container">
      <section>
        <h2 className="intro">Popular Wines</h2>
        <Row>
          {productsSet1.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={3}>
              <Card className="product-card mb-2">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="photo"
                />
                <Card.Body>
                  <Card.Title className="product-card-title">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="product-card-text">
                    {product.description}
                  </Card.Text>
                  <button className="custom-button">Add to Cart</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section>
        <h2 className="intro">Exclusive Products</h2>

        <Row>
          {productsSet2.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={3}>
              <Card className="product-card mb-4">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="photo"
                />
                <Card.Body>
                  <Card.Title className="product-card-title">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="product-card-text">
                    {product.description}
                  </Card.Text>
                  <button className="custom-button">Add to Cart</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section>
        <h2 className="intro">Zero Alcohol</h2>

        <Row>
          {productsSet3.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={3}>
              <Card className="product-card mb-4">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="photo"
                />
                <Card.Body>
                  <Card.Title className="product-card-title">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="product-card-text">
                    {product.description}
                  </Card.Text>
                  <button className="custom-button">Add to Cart</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Products;
