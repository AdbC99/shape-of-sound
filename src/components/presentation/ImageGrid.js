import React from 'react';
import HoverImage from './HoverImage';
import {Row, Col} from 'react-bootstrap';

// In this initial version this is a static grid; but it should be extended to take 
// a set of squares or rectangles and automatically lay them out the best way, then
// the array would not need to be repetitively indexed in the way it is below
const ImageGrid = (props) => {
    return (
        <>
            {
                props.rows.map((row, index)=>{
                    return (
                        <Row key={index} className='no-gutters'>
                            {
                                row.map((col, index2)=>{
                                    let md=6;
                                    let lg=3;

                                    if (col.type === 'rectangle')
                                    {
                                        md = 12;
                                        lg = 6;
                                    }

                                    return (
                                        <Col md={md} lg={lg} key={index2}>
                                            <HoverImage src={col.src} alt={col.alt} text={col.text}/>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    )
                })
             }
        </>
    )
}

export default ImageGrid

