import React, { useState } from 'react'
import card from '../API/card';
import OnlineTransition from './OnlineTransition';
import OnlineMode from './OnlineMode';
import { Rating } from 'react-simple-star-rating';

const Payment = (props) => {
    const [activePayment, setActivePayment] = useState("");
    const [placeOrder, setPlaceOrder] = useState(false);

    const [paymentMode, setPaymentMode] = useState({
        status: false,
        mode: ""
    })

    const [paymentError, setPaymentError] = useState({
        status: false,
        message: ""
    });

    const [onlinePayment, setOnlinePayment] = useState({
        cardName: "",
        cardNumber: "",
        cardCVV: "",
        cardExpire: "",
        cardRemember: false
    });



    const handlePaymentInput = (e) => {
        let name, value;
        if (e.target.type === 'text' || e.target.type === 'number' || e.target.type === 'month') {
            name = e.target.name;
            value = e.target.value;
        } else {
            name = e.target.name;
            value = e.target.checked;
        }
        setOnlinePayment({ ...onlinePayment, [name]: value })
    }


    const handleOnlinePayment = (e) => {
        e.preventDefault(e);
        if (onlinePayment.cardNumber === card.cardNumber && onlinePayment.cardCVV === card.cardCVV && onlinePayment.cardExpire === card.cardExpire) {
            setActivePayment("online-payment");
            setPaymentError(false);
        } else {
            setPaymentError({
                status: true,
                message: "Card Detail"
            });
        }
    }

    let renderPayment;
    if (activePayment === "online") {
        renderPayment = <OnlineMode handlePaymentInput={handlePaymentInput} activePayment={activePayment} setActivePayment={setActivePayment} handleOnlinePayment={handleOnlinePayment} />
    } else if (activePayment === "online-payment") {
        renderPayment = <OnlineTransition setPaymentMode={setPaymentMode} paymentError={paymentError} setPaymentError={setPaymentError} card={card} />
    } else {
        renderPayment = <></>
    }

    // if(placeOrder) {
    //     console.log(placeOrder);
    //     renderPayment = (

    //     )
    // }

    const handlePaymentPrevious = () => {
        props.setActiveForm(1)
    }

    const handlePaymentSubmit = () => {
        setPlaceOrder(true);
        document.title = "Order Placed"
    }

    return (
        <>
            {placeOrder &&
                <div className='bg-dark row d-flex justify-content-center align-content-center' style={{ width: "100%", minHeight: "100vh", position: "fixed", top: "0", left: "0", zIndex: 1 }}>
                    <div class="alert alert-success col-md-4" style={{height: "100%"}}>
                        <strong>✔ Order Done!</strong> through {paymentMode.mode} Payments.
                    </div>
                    <div className="row text-light d-flex justify-content-center">
                        <div className="col-md-4 border p-3">
                            <h4>{props.data.productName}</h4>
                            <p className="card-text"><Rating initialValue={props.data.rating} readonly={true} size={20} allowFraction="true" /> <small style={{ position: "relative", top: "4px" }}>{props.data.noOfRatings} ratings</small></p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>order id</p>
                            <p className="card-text">{props.data.orderId}</p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>order date</p>
                            <p className="card-text">{props.data.orderDate}</p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>order placed by</p>
                            <p className="card-text">{props.user.customerName}</p>
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>shipping address</p>
                            <p className="card-text">{props.user.customerAddress}</p>
                        </div>
                    </div>
                    
                </div>}

            <div className="col ps-5">
                <div className="row mt-2">
                    <div className="col-md-4 col-lg-3  border p-3">
                        <h6 className='text-center'>Chose your Payment</h6>
                        <div className="btn-group-vertical d-flex">
                            <button onClick={() => { setActivePayment("COD"); setPaymentMode({ status: true, mode: "COD" }) }} className={`btn btn-light`} disabled={paymentMode.status}>Cash On Delivery</button>
                            <button onClick={() => { setActivePayment("online") }} className="btn btn-light" disabled={paymentMode.status}>Online</button>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-9 p-5 border">
                        <p className="text-muted ms-3" style={{ fontSize: "14px", margin: "0" }}>{activePayment !== "" && "payment mode"}</p>
                        <p className="card-text ms-3">{(activePayment === "online-payment") ? "online" : activePayment}{activePayment === "" && "Select Your Payment"}</p>
                        {
                            paymentError.status &&
                            <div class="alert alert-danger">
                                <strong>Invalid!</strong> {paymentError.message}.
                            </div>
                        }
                        {
                            paymentMode.status &&
                            <div class="alert alert-success">
                                <strong>Payment Successful!</strong> through {paymentMode.mode}.
                            </div>
                        }
                        {!paymentMode.status && renderPayment}
                    </div>
                </div>
                <div className="row mt-3">
                    <div className='col d-flex justify-content-between ms-5 me-5'>
                        <button className='btn btn-primary' onClick={handlePaymentPrevious}>Previous</button>
                        <button className='btn btn-primary' onClick={handlePaymentSubmit} disabled={!paymentMode.status}>Place Order</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment