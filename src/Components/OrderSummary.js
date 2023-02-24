import React from 'react';
import { Rating } from 'react-simple-star-rating';

const OrderSummary = (props) => {
    return (
        <>
            <div className="col p-2">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5 p-5 border">
                        <h4>{props.data.productName}</h4>
                        <p className="card-text"><Rating initialValue={props.data.rating} readonly={true} size={20} allowFraction="true" /> <small style={{ position: "relative", top: "4px" }}>{props.data.noOfRatings} ratings</small></p>
                        <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>order id</p>
                        <p className="card-text">{props.data.orderId}</p>
                        <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>order date</p>
                        <p className="card-text">{props.data.orderDate}</p>
                        <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>price</p>
                        <p className="card-text">₹ {props.data.price}/day</p>
                        <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>category</p>
                        <p className="card-text">{props.data.productCategory}</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className='col d-flex justify-content-between m-2'>
                        <button className='btn btn-primary disabled'>Previous</button>
                        <button className='btn btn-primary' onClick={props.handleSummaryNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSummary