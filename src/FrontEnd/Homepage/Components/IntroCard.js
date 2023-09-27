//IMPORT Custom Styling
import '../Styling/Homepage.css';

//IMPORT React components
import React, { useEffect } from 'react';
import { Card, Row, Col, Button, Carousel } from 'react-bootstrap';

//IMPORT Icons
import { AiFillInstagram, AiFillMail, AiFillTwitterCircle, AiOutlineStar } from 'react-icons/ai'

//IMPORT Photos
import intro from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/intro.png';

//IMPORT Helper functions
import { getProducts } from '../../ProductPages/HelperFunctions/ProductDBReqs';

function IntroCard(props) {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    async function getRandomProducts() {
        let products = await getProducts("MensProducts", "All");

        //return any random 3 product cards
        products.sort(() => Math.random() - Math.random()).slice(0, 3);

        console.log(`Inside getRandomProducts, products: ${JSON.stringify(products)}`)

        return products;
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

    return (

        <Card className='intro-bg-card'>

            <Row >
                <Col xs={12} md={4}>

                    <Card className='intro-card d-flex align-items-center'>
                        <Row className='social-links'>
                            <Col xs={1}>
                                <AiFillInstagram />
                            </Col>
                            <Col xs={1}>
                                <AiFillMail />
                            </Col>
                            <Col xs={1}>
                                <AiFillTwitterCircle />
                            </Col>
                        </Row>

                        <div className='header-text'>
                            <h5>StudentLifter Alex Pictured</h5>
                            <h1><b>Become a Student Lifter.</b></h1>
                            <p> Welcome to Student Lifter, where you'll find high-quality fitness apparel and accessories for students and young professionals. Our products are designed to be both functional and stylish, so you can look and feel your best while working towards your fitness goals. We offer a wide range of products for both men and women, including workout clothes, shoes, and gym bags. Our commitment to providing affordable, high-quality products means you can focus on reaching your full potential, without breaking the bank. We hope you'll take a look at our selection and find something that fits your style and needs. </p>
                            <Button className='about-us-btn'>ABOUT US</Button>
                        </div>


                        <div className='featured-products d-flex flex-column'>
                            <h6>FEATURED PRODUCTS <AiOutlineStar /></h6>
                            <p>Check out our top picks for the best products to enhance your daily life.</p>
                            <br></br>
                            <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                                <FeaturedProductsCarousel products={products} />
                                <Button className='view-products-btn'>View All Products</Button>
                            </div>

                        </div>

                    </Card>
                    <br />
                </Col>
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Img variant="right" src={intro} id='intro-img' />
                    </Card>
                </Col>
            </Row>
        </Card>
    );
}

const FeaturedProductsCarousel = ({ products }) => {
    console.log(`products: ${JSON.stringify(products)}`)
    return (
        <Carousel data-bs-theme="light" id='featured-prod-car' className='w-80'>
            {products.map((product) => (
                <Carousel.Item className='w-100'>
                    <img className='d-block w-100' src={product._imageURL} />
                    <Carousel.Caption >
                        <h5>{product._name}</h5>
                        <p>{product._color}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default IntroCard;


