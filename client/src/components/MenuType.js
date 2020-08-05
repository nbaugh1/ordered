import React from 'react'

const MenuType = ({ menu }) => {
    return (
        <div>
            <h1>{menu.name}</h1>
            <h3>Items:</h3>
            {menu.items.map((item) =>
                <p>{item.name} : {item.description} - ${item.price}</p>
            )}
        </div>
    )
}

export default MenuType
