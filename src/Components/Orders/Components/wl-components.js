//react components
import react from 'react'
import { Card, Row, Col, Form } from 'react-bootstrap';

//Photos
import Beanie from '/Users/johnnylaidler/studentlifter/src/Photos/beanie.webp'

//Icons
import { BsSortDownAlt, BsSortDown } from 'react-icons/bs'

export const ProductCard = () => {
    return (
        <Card style={{ border: 'none' }}>
            <Card.Body>
                <Card.Img src={Beanie} style={{ width: '100%' }}></Card.Img>
                <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '8px' }}>
                    <Card.Title style={{ paddingTop: '5px', fontSize: '0.98em', marginRight: '1em' }}>Sharkhead Beanie  </Card.Title>
                    <Card.Text style={{ fontSize: '1em', whiteSpace: 'nowrap' }}><b>$20.00 USD</b></Card.Text>
                </div>
                <Card.Text style={{ color: 'gray', fontSize: '0.8em' }}>Navy</Card.Text>
            </Card.Body>
        </Card >
    )
}

export const CardGrid = () => {
    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <Row>
                <Col xs={3}>
                    <ProductCard />
                </Col>
                <Col xs={3}>
                    <ProductCard />
                </Col>
            </Row>
        </div>
    )
}

export function Filter({ items }) {
    /*
    // State to store the selected filter option
    const [selectedOption, setSelectedOption] = useState('none');

    // Event handler for when the filter dropdown value is changed
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Sorts the items array based on the selected filter option
    const sortedItems = items.sort((a, b) => {
        if (selectedOption === 'low_to_high') {
            return a.price - b.price;
        } else if (selectedOption === 'high_to_low') {
            return b.price - a.price;
        }
        return 0;
    });
    */

    return (
        <Form.Select aria-label="sort" className="custom-select" style={{ width: '12em', marginLeft: '30px', border: 'none', fontWeight: '500' }}>
            <option value="low_to_high" ><b>Price: Low to High</b></option>
            <option value="high_to_low"><b>Price: High to Low <BsSortDown /></b></option>
            <option value="none"><b>Recently Added</b></option>
        </Form.Select >
    );

    //     <div>
    //         <label style={{ border: 'none' }}>
    //             <select value={1} onChange={1}>
    //                 <option value="none">None</option>
    //                 <option value="low_to_high">Price: Low to High</option>
    //                 <option value="high_to_low">Price: High to Low</option>
    //             </select>
    //         </label>
    //         <ul>
    //             {/* {1.map((item) => (
    //                 <li key={item.id}>{item.name} - {item.price}</li>
    //             ))} */}
    //         </ul>
    //     </div>
    // );
}