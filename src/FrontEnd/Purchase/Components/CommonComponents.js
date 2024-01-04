import React from 'react';
import { Container } from 'react-bootstrap'

//IMPORT Custom Components
import CheckoutTimeline from './CheckoutTimeline/CheckoutTimeline.js'

// Displays the site's terms of use
export const Terms = () => {
    return (
        <Container className="terms">
            <p>
                By placing your order you agree to StudentLifter's <u>Terms and Conditions</u>, <u>Privacy Notice</u> and <u>Cookie Policy.</u>
            </p>
        </Container>
    )
}

// Displays the navigational timeline
export const Timeline = ({ currentURL }) => {
    return (
        <Container className="checkout-timeline">
            <CheckoutTimeline url={currentURL} />
        </Container>
    )
}