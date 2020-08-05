import React, { useEffect, useState } from 'react'
import MenuType from './MenuType'

export const Menu = () => {
    const [menu, setMenu] = useState([])
    const [menuLoading, setMenuLoading] = useState(true)
    useEffect(() => {
        window.fetch('/api/menus')
            .then(response => response.json())
            .then(json => setMenu(json))
            .then(setMenuLoading(false))
            .catch(error => console.log(error))
    }, [])
    debugger
    return (
        <div>
            {
                menuLoading ?
                    <div>
                        <p>Menu</p>
                        <h4>loading....</h4>
                    </div>
                    :
                    <div>
                        Menus Loaded!
                        {menu.map((type) =>
                        <MenuType menu={type} key={type.id} />
                    )}
                    </div>
            }
        </div>
    )
}
