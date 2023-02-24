import React, { useState } from 'react'

import card from '../API/card'


const Card = () => {
    const [viewCard, setViewCard] = useState(false);
    document.title = "View Card Details";

    return (
        <div className='container bg-light mt-5 p-3'>
            <div className="row m-2">
                <div className="col-sm-12 col-lg-8">
                    <h4 className="card-title">Card Details</h4>
                </div>
            </div>
            <div className="row m-2">
                <div className="col-sm-12 col-lg-8">
                    <div onMouseEnter={() => {setViewCard(true)}} onMouseLeave={() => {setViewCard(false)}} className="col-md-5 card bg-dark text-light" title='Move Your cursor to view the card details'>
                        <div className="card-body">
                            <div className="row m-1">
                                <div className="col-md-12">
                                    <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>holder name</p>
                                    <p className="card-text">{card.cardName}</p>
                                </div>
                            </div>
                            <div className="row m-1">
                                <div className="col-md-12">
                                    <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>card number</p>
                                    <p className="card-text">{viewCard ? card.cardNumber : card.cardNumber.slice(0, 12).padEnd(16, "*")}</p>
                                </div>
                            </div>
                            <div className="row m-1">
                                <div className="col-md-6">
                                    <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>card cvv</p>
                                    <p className="card-text">{viewCard ? card.cardCVV : "***"}</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>card expire</p>
                                    <p className="card-text">{viewCard ? card.cardExpire : "****-**"}</p>
                                </div>
                            </div>
                            <div className="row m-1">
                                <div className="col-md-12">
                                    <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>pin</p>
                                    <p className="card-text">{viewCard ? card.cardPin : "******"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card