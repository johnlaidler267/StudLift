//IMPORT Custom Styling
import '../../Styling/Homepage.css';

//IMPORT React components
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

//IMPORT Custom components
import FeaturedProducts from './Subcomponents/FeaturedProducts';

//IMPORT Icons
import { AiFillInstagram, AiFillMail, AiFillTwitterCircle, AiOutlineStar } from 'react-icons/ai'

//IMPORT Photos
import intro from '/Users/johnnylaidler/studentlifter/src/Resources/Photos/intro.png';

//IMPORT Helper functions
import { getProducts } from '../../../ProductPages/HelperFunctions/ProductDBReqs';

/* Renders the introductory card for the homepage */
function IntroCard() {
    const navigate = useNavigate();
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

            const AboutUsBtn = () => {
                return (
                    <Button className='about-us-btn' onClick={() => navigate('/faq')}>ABOUT US</Button>
                )
            }

            return (
                <div className='header-text'>
                    <h5>StudentLifter Alex Pictured</h5>
                    <h1><b>Become a Student Lifter.</b></h1>
                    <p> Welcome to Student Lifter, where you'll find high-quality fitness apparel and accessories for students and young professionals. Our products are designed to be both functional and stylish, so you can look and feel your best while working towards your fitness goals. We offer a wide range of products for both men and women, including workout clothes, shoes, and gym bags. Our commitment to providing affordable, high-quality products means you can focus on reaching your full potential, without breaking the bank. We hope you'll take a look at our selection and find something that fits your style and needs. </p>
                    <AboutUsBtn />
                </div>
            )
        }

        return (
            <Card className='d-flex align-items-center intro-card '>
                <SocialLinks />
                <Header />
                <FeaturedProducts products={products} navigate={navigate} />
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
                <Col xs={12} md={8}>
                    <Img />
                </Col>
            </Row>
        </Card>
    );
}


export default IntroCard;


