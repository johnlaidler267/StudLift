//IMPORT React components
import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap';
//IMPORT Helper functions
import { getProducts } from '../../ProductPages/HelperFunctions/ProductDBReqs';

function ProductWheel({ gender }) {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    async function getRandomProducts() {
        if (gender == "m")
            return await getProducts("MensProducts", "All");
        else
            return await getProducts("WomensProducts", "All")
    }

    useEffect(() => {
        getRandomProducts().then((products) => {
            setProducts(products)
            setLoading(false)
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    //Returns an array of Carousel items that display 3 products at a time
    function displayItems() {
        let triProductArr = [];
        for (let i = 0; i < products.length; i += 3) {
            triProductArr.push(
                <Carousel.Item className='w-100'>
                    <Row>
                        <Col className='py-3 d-flex flex-column align-items-center'>
                            <img className='d-block w-50' src={products[i]._imageURL} />
                            <h5>{products[i]._name}</h5>
                            <p>{products[i]._color}</p>
                        </Col>
                        <Col className='py-3 d-flex flex-column align-items-center'>
                            <img className='d-block w-50' src={products[i + 1]._imageURL} />
                            <h5>{products[i + 1]._name}</h5>
                            <p>{products[i + 1]._color}</p>
                        </Col>
                        <Col className='py-3 d-flex flex-column align-items-center'>
                            <img className='d-block w-50' src={products[i + 2]._imageURL} />
                            <h5>{products[i + 2]._name}</h5>
                            <p>{products[i + 2]._color}</p>
                        </Col>
                    </Row>
                </Carousel.Item>
            )
        }
        return triProductArr
    }

    const ProductCarousel = () => {
        return (
            <Carousel variant="dark" className='px-4 m-4'>
                {displayItems()}
            </Carousel>
        )
    }

    return (
        <Container fluid style={{
            width: "95%",
            margin: "0 auto"
        }}>
            <Card style={{ backgroundColor: "white", width: "100%", height: "100%", border: 'none', color: 'black' }}>
                <ProductCarousel/>
            </Card>
        </Container >
    );
}

export default ProductWheel;


