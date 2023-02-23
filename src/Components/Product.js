import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../API/products';
import { Rating } from 'react-simple-star-rating'

const Product = (props) => {
    document.title = "Rent Automobile"
    const params = useParams();
    const productId = params.id;

    let result = products.filter((elem) => {
        return elem.productId === productId;
    });
    

    let render;

    if (result) {
        render = (
            <div className='container mt-5 p-4 bg-light'>
                <div className="row">
                    <div className="col-lg-6 col-xl-5">
                        <div className="img border">
                            <img src={result[0].image} alt="product" width="100%" height="350px" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7 ps-5">
                        <div className="row">
                            <h3>{result[0].productName}</h3>
                            <p className="card-text"><Rating initialValue={result[0].rating} readonly={true} size={20} allowFraction="true" /> <small style={{ position: "relative", top: "4px" }}>{result[0].noOfRatings} ratings</small></p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>price</p>
                            <p className="card-text">₹ {result[0].price}/day</p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>category</p>
                            <p className="card-text">{result[0].productCategory}</p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>description</p>
                            <p className="card-text">{result[0].productDescription}</p>
                        </div>
                        <div className="row mt-3">
                            <div className='col'>
                                <Link to={`/order-summary/${result[0].productId}`} className='btn btn-success'>Rent Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        render = (
            <div>not found</div>
        )
    }

    useEffect(() => {
        props.setProduct(result[0]);
    },[])

    return (
        render
    )
}

export default Product