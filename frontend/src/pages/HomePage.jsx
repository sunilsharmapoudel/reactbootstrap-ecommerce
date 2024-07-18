import { Row, Col } from "react-bootstrap"
import products from "../data"
import Product from "../components/Product.jsx";
function HomePage() {
    return (
        <>
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default HomePage;
