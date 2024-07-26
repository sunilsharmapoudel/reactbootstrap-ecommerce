import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const [product, setProduct] = useState({});
    const { name } = useParams();
    useEffect(() => {
        axios
            .get("/api/v1/products/" + name)
            .then((resp) => setProduct(resp.data))
            .catch((err) => console.log("ERROR::", err.message));
    }, []);
    console.log(product)
    return (
        <Row>
            <Col md={5}>
                <Image src={product.image} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Price: ${product.price}</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={product.numReviews} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span>{product.description}</span>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price</Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status</Col>
                            <Col>
                                <strong>
                                    {" "}
                                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}{" "}
                                </strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button variant="secondary" disabled={product.countInStock === 0}>
                            Add to Cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
};

export default ProductPage;
