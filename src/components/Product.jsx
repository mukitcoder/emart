import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { addCart } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product)=>{
      dispatch(addCart(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
    <>
    <Col md={6}>
        <Skeleton height="400px"></Skeleton>
    </Col>
    <Col md={6} style={{lineHeight:2}}>
        <Skeleton height="50px" width="300px"></Skeleton>
        <Skeleton height="75px"></Skeleton>
        <Skeleton height="25px" width="150px"></Skeleton>
        <Skeleton height="50px"></Skeleton>
        <Skeleton height="150px"></Skeleton>
        <Skeleton height="50px" width="100px"></Skeleton>
        <Skeleton height="50px" width="100px" style={{marginLeft:6}}></Skeleton>
    </Col>
    </> 
    )
  };

  const ShowProduct = () => {
    return (
      <>
        <Col md={6}>
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </Col>
        <Col md={6}>
          <h3 className="text-uppercase text-black-50">{product.category} </h3>
          <h1 className="display-5">{product.title} </h1>   
          <p className="lead fw-bolder">Rating {product.rating && product.rating.rate} </p>   
          <p className="display-6 fw-bold">$ {product.price} </p>   
          <p className="lead">$ {product.description} </p>   
          <button onClick={()=>addProduct(product)} className="btn btn-outline-secondary px-4 py-2 me-3">Add to Cart</button>
          <NavLink to="/cart" className="btn btn-secondary px-4 py-2">Go to Cart</NavLink>
        </Col>
      </>
    );
  };
  return (
    <>
      <Container className="py-3">
        <Row className="px-3">{loading ? <Loading /> : <ShowProduct />}</Row>
      </Container>
    </>
  );
};

export default Product;
