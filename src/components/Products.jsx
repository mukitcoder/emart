import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <Col md={3} className="mb-5">
          <Skeleton height="250px"></Skeleton>
        </Col>
        <Col md={3}>
          <Skeleton height="250px"></Skeleton>
        </Col>
        <Col md={3}>
          <Skeleton height="250px"></Skeleton>
        </Col>
        <Col md={3}>
          <Skeleton height="250px"></Skeleton>
        </Col>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <Col md={12} className="buttons d-flex justify-content-center pb-5">
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </Col>
        <Row md={4} className="g-4 mb-4">
          {filter.map((product) => {
            return (
              <>
                <Col>
                  <Card className="h-100 text-center p-5" key={product.id}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      height="150px"
                    />
                    <Card.Body>
                      <Card.Title className="mb-0">
                        {product.title.substring(0, 12)}...
                      </Card.Title>
                      <Card.Text className="lead fw-bolder">
                        ${product.price}
                      </Card.Text>
                      <NavLink to={`/products/${product.id}`} className="btn btn-outline-secondary">
                        Buy Now
                      </NavLink>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </>
    );
  };
  return (
    <div>
      <Container>
        <Row className="my-5 py-5">
          <Col md={12} className="text-center">
            <h1 className="fw-bolder">Latest Products</h1>
            <hr />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
