import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const MenuType = ({ menu }) => {
    return (
        <div>
            <h1>{menu.name}</h1>
            <h3>Items:</h3>
            <Accordion defaultActiveKey='0'>
                {menu.items.map((item) =>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                            {item.name}                            ${item.price}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={item.id}>
                            <Card.Body>{item.description}</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                )}
            </Accordion>

        </div>


    )
}

export default MenuType

