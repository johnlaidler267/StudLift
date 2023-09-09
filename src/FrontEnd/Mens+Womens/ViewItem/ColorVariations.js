import React from 'react';
import { Card } from 'react-bootstrap'

export function colorVariations(imgSrc, filterColor, value, setColor) {
    // Create a style object with the filter property
 

    let image = (<Card.Img
        src={imgSrc}
        alt="Your Image"
        value={value}
        onClick={() => setColor(value)}
        style={style}
    />);

    console.log(image)

    // Return an image element with the specified style
    return image

}

export default colorVariations;