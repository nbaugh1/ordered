import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

const MenuType = ({ menu }) => {
    return (
        <div>
            <h1>{menu.name}</h1>
            <h3>Items:</h3>
            <Table>

                <Accordion defaultActiveKey='0'>
                    {menu.items.map((item) =>
                        <tr>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                                    {item.name}                            ${item.price}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={item.id}>
                                    <Card.Body>
                                        {item.description}
                                        <Button>Add</Button>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </tr>
                    )}
                </Accordion>

            </Table>
        </div>
    )
}

export default MenuType

