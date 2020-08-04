import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

export const Menu = () => {
    const [menu, setMenu] = useState([])
    const [menuLoading, setMenuLoading] = useState(true)
    useEffect(() => {
        window.fetch('/api/menus')
            .then(response => response.json())
            .then(json => setMenu(json))
            .then(setMenuLoading(false))
            .then(console.log(menu))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            {
                menuLoading ?
                    <div>
                        <p>Menu</p>
                        <Table>
                            <h4>loading....</h4>
                        </Table>
                    </div>
                    :
                    <div>
                        Menu Loaded!
                        </div>
            }
        </div>

    )
}
