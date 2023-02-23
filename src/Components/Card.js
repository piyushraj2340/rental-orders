import React, { useState } from 'react'

import card from '../API/card'


const Card = () => {
    const [viewCard, setViewCard] = useState(false);
    document.title = "View Card Details";
    const handleViewCard = () => {
        setViewCard(!viewCard);
    }
    return (
        <div className='container bg-light p-5'>
            <div className="row m-3">
                <div className="col">
                    <h4 className="card-title">Card Details</h4>
                </div>
            </div>
            <div onClick={handleViewCard} className="card m-3 bg-dark text-light" title='click to view card details' style={{ width: "400px" }}>
                <div className="card-body">
                    <div className="row m-1">
                        <div className="col">
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>holder name</p>
                            <p className="card-text">{card.cardName}</p>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>card number</p>
                            <p className="card-text">{viewCard? card.cardNumber : card.cardNumber.slice(0,12).padEnd(16,"*")}</p>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col-md-6">
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>card cvv</p>
                            <p className="card-text">{viewCard?card.cardCVV:"***"}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>card expire</p>
                            <p className="card-text">{viewCard ? card.cardExpire: "****-**"}</p>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>pin</p>
                            <p className="card-text">{viewCard ? card.cardPin: "******"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card