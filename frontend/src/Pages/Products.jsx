import React from 'react'
import { data } from '../data.js'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <div>
            <p>Products Catalogue</p>

            <div className="products">
                {data.products.map((E, I) =>
                    <div className="product">
                        <Link to={`/Product/${E.slug}`}>
                            <img src={E.image} alt="" />
                        </Link>
                        <div> <Link to={`/Product/${E.slug}`}> {E.name}</Link></div>
                        <div><strong>{E.brand}</strong></div>
                        <div>Rs. {E.price}</div>
                    </div>
                )}
            </div>
        </div>
    )
}
