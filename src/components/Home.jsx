import React from "react";
import { Card, Container } from "react-bootstrap";
import backgroundImage from "../assets/Background.png";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <Card className="bg-dark text-white border-0">
        <Card.Img src={backgroundImage} alt="Card image" height="550px"/>
        <Card.ImgOverlay className="d-flex flex-column justify-content-around">
          <Container >
            <Card.Title className="display-6 fw-bold text-danger">New Season Arrivals</Card.Title>
            <Card.Text className="lead fs-3 text-warning fw-bolder">
              Checkout All The Trends
            </Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
      <Products></Products>
    </div>
  );
};

export default Home;
