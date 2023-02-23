import React from 'react'
import { Rating } from 'react-simple-star-rating'

import products from '../API/products'
import { Link } from 'react-router-dom'


const Products = () => {
    let result = products.map((elem) => {
            return (
            <div key={elem.id} className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center center-text">
                <Link className='text-dark' style={{textDecoration: "none"}} to={`/products/${elem.productId}`}>
                    <div className="card m-2" style={{ width: "300px" }}>
                        <img className="card-img-top" src={elem.image} alt="Card automobile" style={{ width: "100%" }} />
                        <div className="card-body">
                            <h4 className="card-title">{elem.productName}</h4>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>price</p>
                            <p className="card-text">₹ {elem.price}/day</p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>category</p>
                            <p className="card-text">{elem.productCategory}</p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>ratings</p>
                            <p className="card-text"><Rating initialValue={elem.rating} readonly={true} size={20} allowFraction="true" /> <small style={{position: "relative", top: "4px"}}>{elem.noOfRatings}</small></p>

                        </div>
                    </div>
                </Link>
            </div>
        )
    })


    return (
        <div className="container">
            <div className="row">
                <h1 className='text-center p-2'>Available Products for Rental</h1>
            </div>
            <div className="row">
                {result}
            </div>
        </div>
    )
}

export default Products