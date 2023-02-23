import React from 'react'

const OnlineMode = (props) => {
    return (
        <>
            <form method='post'>
                <div className="row p-2">
                    <div className="col-md-6">
                        <label for="cardName" className="form-label">Card Holder Name:</label>
                        <input type="text" className="form-control" id="cardName" placeholder="Enter Card Holder Name" name="cardName" onChange={props.handlePaymentInput} />
                    </div>
                    <div className="col-md-6">
                        <label for="cardNumber" className="form-label">Card Number :</label>
                        <input type="number" className="form-control" id="cardNumber" placeholder="Enter Card Number" name="cardNumber" onChange={props.handlePaymentInput} />
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-md-6">
                        <label for="cardCVV" className="form-label">Card CVV:</label>
                        <input type="number" className="form-control" id="cardCVV" placeholder="Enter CVV" name="cardCVV" onChange={props.handlePaymentInput} />
                    </div>
                    <div className="col-md-6">
                        <label for="cardExpire" className="form-label">Card Expire :</label>
                        <input type="month" className="form-control" id="cardExpire" placeholder="Enter Card Expire" name="cardExpire" onChange={props.handlePaymentInput} />
                    </div>
                </div>

                <div className="form-check m-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="cardRemember" onChange={props.handlePaymentInput} /> Remember card.
                    </label>
                </div>

                <button className="btn btn-primary m-3" onClick={props.handleOnlinePayment}>Make Payment</button>
            </form>
        </>
    );
}

export default OnlineMode