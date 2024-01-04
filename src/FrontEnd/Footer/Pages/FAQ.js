//react components
import React from 'react'
import { Card, Form, FormControl, InputGroup, Accordion } from 'react-bootstrap';

//icons
import { CiDeliveryTruck } from 'react-icons/ci'
import { MdOutlineAssignmentReturn } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { BsGearWideConnected, BsBagCheck, BsSearch } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const FAQ = () => {

    // Displays the header & search bar
    const FAQHeader = () => {

        // Displays the seach bar for the FAQ page
        function SearchBar() {

            const SearchInput = () => {
                return (
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 faq-search-bar" />
                )
            }

            const SearchIcon = () => {
                return (
                    <InputGroup.Text id="basic-addon2" className='search-icon' ><BsSearch /></InputGroup.Text>
                )
            }

            return (
                <Form inline className='faq-search'>
                    <InputGroup>
                        <SearchInput />
                        <SearchIcon />
                    </InputGroup>
                </Form>
            );
        }

        return (
            <Card className='faq-header'>
                <h1>HOW CAN WE HELP?</h1>
                <SearchBar />
            </Card>
        )
    }

    // Displays the grid of FAQ pages
    function FAQGrid() {

        function FAQOrderCard() {

            const DeliveryIcon = () => {
                return (
                    <CiDeliveryTruck className='faq-icon' />
                )
            }

            const DeliveryLabel = () => {
                return (
                    <Card.Title>
                        ORDERS & DELIVERY
                    </Card.Title>
                )
            }

            return (
                <Card className='faq-card'>
                    <DeliveryIcon />
                    <DeliveryLabel />
                </Card>
            )
        }

        function FAQReturnsCard() {

            const ReturnsIcon = () => {
                return (
                    <MdOutlineAssignmentReturn className='faq-icon' />
                )
            }

            const ReturnsLabel = () => {
                return (
                    <Card.Title>
                        RETURNS & REFUNDS
                    </Card.Title>
                )
            }

            return (
                <Card className='faq-card'>
                    <ReturnsIcon />
                    <ReturnsLabel />
                </Card>
            )
        }

        function FAQPaymentsCard() {

            const PaymentIcon = () => {
                return (
                    <RiSecurePaymentLine className='faq-icon' />
                )
            }

            const PaymentLabel = () => {
                return (
                    <Card.Title>
                        PAYMENTS & PROMOTIONS
                    </Card.Title>
                )
            }
            return (
                <Card className='faq-card'>
                    <PaymentIcon />
                    <PaymentLabel />
                </Card>
            )
        }

        function FAQTechnicalCard() {

            const TechnicalIcon = () => {
                return (
                    <BsGearWideConnected className='faq-icon' />
                )
            }

            const TechnicalLabel = () => {
                return (
                    <Card.Title>
                        TECHNICAL
                    </Card.Title>
                )
            }

            return (
                <Card className='faq-card'>
                    <TechnicalIcon />
                    <TechnicalLabel />
                </Card>
            )
        }

        function FAQProductCard() {

            const ProductIcon = () => {
                return (
                    <BsBagCheck className='faq-icon' />
                )
            }

            const ProductLabel = () => {
                return (
                    <Card.Title>
                        PRODUCT
                    </Card.Title>
                )
            }

            return (
                <Card className='faq-card'>
                    <ProductIcon />
                    <ProductLabel />
                </Card>
            )
        }

        function FAQGeneralInfoCard() {

            const GeneralInfoIcon = () => {
                return (
                    <AiOutlineInfoCircle className='faq-icon' />
                )
            }

            const GeneralInfoTitle = () => {
                return (
                    <Card.Title>
                        GENERAL INFORMATION
                    </Card.Title>
                );
            }

            return (
                <Card className='faq-card'>
                    <GeneralInfoIcon />
                    <GeneralInfoTitle />
                </Card>
            )
        }

        return (
            <div className='faq-card-grid'>
                <div className='faq-card-row'>
                    <FAQOrderCard />
                    <FAQReturnsCard />
                    <FAQPaymentsCard />
                </div>
                <div className='faq-card-row'>
                    <FAQTechnicalCard />
                    <FAQProductCard />
                    <FAQGeneralInfoCard />
                </div>
            </div>
        )
    }

    // Displays accordion of popular questions
    function PopularQuestions() {
        return (
            <div className='pop-quest-div'>
                <Card className='pop-quest-card'>
                    <Card.Title><h3><b>POPULAR QUESTIONS</b></h3></Card.Title>
                    <Accordion defaultActiveKey="0" className='faq-accordion'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> What types of products does Student Lifter offer?</Accordion.Header>
                            <Accordion.Body>
                                Student Lifter offers a wide range of fitness apparel and accessories, including workout clothes, shoes, and gym bags. We have options for both men and women, and our products are designed to be both functional and stylish.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How do I place an order on your website?</Accordion.Header>
                            <Accordion.Body>
                                To place an order on our website, simply add the items you'd like to purchase to your cart and proceed to checkout. You'll be prompted to enter your shipping and billing information, and you can choose from a variety of payment methods.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is your return policy?</Accordion.Header>
                            <Accordion.Body>
                                We offer a 30-day return policy on all of our products. If you're not satisfied with your purchase for any reason, you can return it for a full refund within 30 days of receiving your order.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Do you offer free shipping?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we offer free standard shipping on all orders within the United States.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>How can I contact Customer Service?</Accordion.Header>
                            <Accordion.Body>
                                You can contact our Customer Service team by emailing us at [email address], or by filling out the contact form on our website. Our team is available to answer any questions or concerns you may have Monday through Friday, 9am to 5pm EST.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card>
                <br />
            </div>
        )
    }

    // Displays more help card
    const MoreHelp = () => {
        return (
            <Card className='faq-more-help'>
                <h2>NEED MORE HELP?</h2>
                <p>Please contact our support team here</p>
            </Card>
        )
    }

    return (
        <div className='faq-background'>
            <FAQHeader />
            <FAQGrid />
            <PopularQuestions />
            <MoreHelp />
        </div>
    )
}

export default FAQ