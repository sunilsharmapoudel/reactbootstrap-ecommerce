import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/${product.name}`}>
                <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
                <Card.Text as="div" className="product-title">
                    <Link to={`/${product.name}`}>
                        <strong>{product.name}</strong>
                    </Link>
                </Card.Text>
                <Card.Text as="div">
                    <Rating value={product.rating} text={product.numReviews} />
                </Card.Text>
                <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product;
