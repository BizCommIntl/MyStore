import React from 'react'
import { data } from '../data.js'

export default function Products() {
    return (
        <div>
            <p>Products Catalogue</p>
            {data.products.map ((E, I) => 
                <div className="card">
                    <img src={E.image} alt="" />
                    <p>{E.name}</p>
                    <p>{E.brand}</p>
                    <p>{E.price}</p>
                </div>
            )
            }
        </div>
    )
}
