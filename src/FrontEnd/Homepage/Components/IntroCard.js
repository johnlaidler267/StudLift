//IMPORT Custom Styling
import '../Styling/Homepage.css';

//IMPORT React components
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Carousel } from 'react-bootstrap';

//IMPORT Icons
import { AiFillInstagram, AiFillMail, AiFillTwitterCircle, AiOutlineStar } from 'react-icons/ai'

//IMPORT Photos
import intro from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/intro.png';

//IMPORT Helper functions
import { getProducts } from '../../ProductPages/HelperFunctions/ProductDBReqs';

/* Renders the introductory card for the homepage */
function IntroCard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    //Returns products to be displayed in carousel
    async function getRandomProducts() {
        let products = await getProducts("MensProducts", "All");
        products.sort(() => Math.random() - Math.random()).slice(0, 3);
        return products;
    }

    //Sets random products on page load
    useEffect(() => {
        getRandomProducts().then((products) => {
            setProducts(products)
            setLoading(false)
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    const LeftPanel = () => {

        const SocialLinks = () => {
            return (
                <div className='d-flex flex-row social-links'>
                    <AiFillInstagram />
                    <AiFillMail />
                    <AiFillTwitterCircle />
                </div>
            )
        }

        const Header = () => {
            return (
                <div className='header-text'>
                    <h5>StudentLifter Alex Pictured</h5>
                    <h1><b>Become a Student Lifter.</b></h1>
                    <p> Welcome to Student Lifter, where you'll find high-quality fitness apparel and accessories for students and young professionals. Our products are designed to be both functional and stylish, so you can look and feel your best while working towards your fitness goals. We offer a wide range of products for both men and women, including workout clothes, shoes, and gym bags. Our commitment to providing affordable, high-quality products means you can focus on reaching your full potential, without breaking the bank. We hope you'll take a look at our selection and find something that fits your style and needs. </p>
                    <Button className='about-us-btn'>ABOUT US</Button>
                </div>
            )
        }

        const FeaturedProducts = () => {

            const FeaturedProductsHeader = () => {
                return (
                    <>
                        <h6>FEATURED PRODUCTS <AiOutlineStar /></h6>
                        <p>Check out our top picks for the best products to enhance your daily life.</p>
                        <br></br>
                    </>
                )
            }

            /* Renders carousel of randomly generated products */
            const FeaturedProductsCarousel = ({ products }) => {

                const ProductsDisplay = () => {

                    // Displays a product as a carousel item
                    const CarouselProduct = ({ product }) => {

                        const Img = ({ url }) => {
                            return (
                                <img className='d-block w-100' src={url} />
                            )
                        }

                        const Description = ({ name, color }) => {
                            return (
                                <Carousel.Caption >
                                    <h5>{name}</h5>
                                    <p>{color}</p>
                                </Carousel.Caption>
                            )
                        }

                        return (
                            <Carousel.Item className='w-100'>
                                <Img url={product._imageURL} />
                                <Description name={product._name} color={product._color} />
                            </Carousel.Item>
                        )
                    }

                    return (
                        <>
                            {products.map((product) => (<CarouselProduct product={product} />))}
                        </>
                    )
                }

                return (
                    <Carousel data-bs-theme="light" id='featured-prod-car' className='w-80'>
                        <ProductsDisplay />
                    </Carousel>
                );
            }

            const ViewProductsBtn = () => {
                return (
                    <Button className='view-products-btn'>View All Products</Button>
                )
            }

            return (
                <div className='featured-products d-flex flex-column'>
                    <FeaturedProductsHeader/>
                    <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                        <FeaturedProductsCarousel products={products} />
                        <ViewProductsBtn />
                    </div>
                </div>
            )
        }

        return (
            <Card className='d-flex align-items-center intro-card '>
                <SocialLinks />
                <Header />
                <FeaturedProducts />
            </Card>
        )
    }


    const Img = () => {
        return (
            <div>
                <Card.Img variant="right" src={intro} id='intro-img' />
            </div>
        )
    }

    return (
        <Card className='intro-bg-card'>
            <Row >
                <Col xs={12} md={4}>
                    <LeftPanel />
                </Col>
                <Col>
                    <Img />
                </Col>
            </Row>
        </Card>
    );
}

export default IntroCard;


