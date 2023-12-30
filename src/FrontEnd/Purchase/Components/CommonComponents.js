import CheckoutTimeline from './Components/CheckoutTimeline/CheckoutTimeline.js'

export const Terms = () => {
    return (
        <Container className="terms">
            <p>
                By placing your order you agree to StudentLifter's <u>Terms and Conditions</u>, <u>Privacy Notice</u> and <u>Cookie Policy.</u>
            </p>
        </Container>
    )
}

export const Timeline = ({ currentURL }) => {
    return (
        <Container className="checkout-timeline">
            <CheckoutTimeline url={currentURL} />
        </Container>
    )
}