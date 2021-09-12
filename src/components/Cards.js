import React from 'react'
import { Card } from 'react-bootstrap'

function Cards({image}) {
    return (
        <div>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={image} />
            </Card>
        </div>
    )
}

export default Cards
