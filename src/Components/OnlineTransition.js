import React, { useEffect, useState } from 'react'

const Transition = (props) => {
    let render;
    if (props.activeAnimation === true) {
        render = (
            <>
                <div className="spinner-grow text-muted"></div>
                <div className="spinner-grow text-primary"></div>
                <div className="spinner-grow text-success"></div>
                <div className="spinner-grow text-info"></div>
                <div className="spinner-grow text-warning"></div>
                <div className="spinner-grow text-danger"></div>
                <div className="spinner-grow text-secondary"></div>
                <div className="spinner-grow text-dark"></div>
                <div className="spinner-grow text-light"></div>
            </>
        );
    } else {
        render = (
            <>
                <div className="col-sm-8 col-lg-5 border p-5">
                    <div className="mb-3 mt-3">
                        <label for="cardPin" className="form-label">Enter Card Pin:</label>
                        <input type="number" className="form-control" id="cardPin" placeholder="Enter Card Pin" name="cardPin" onChange={(e) => { props.setPin(e.target.value) }} />
                    </div>
                    <button className="btn btn-info" onClick={props.handleVerifyPin}>Verify Pin</button>
                </div>
            </>

        )
    }
    return (render)
}

const OnlineTransition = (props) => {
    const [countAnimation, setCountAnimation] = useState(0);
    const [activeAnimation, setActiveAnimation] = useState(true);
    const [pin, setPin] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (countAnimation < Math.floor(Math.random() * 5)) {
                setCountAnimation(countAnimation + 1);
            } else {
                setActiveAnimation(false);
            }
        }, 1000);
    })

    const handleVerifyPin = (e) => {
        e.preventDefault(e);
        if(pin === props.card.cardPin) {
            setCountAnimation(0);
            setActiveAnimation(true);
            props.setPaymentMode({
                status: true,
                mode: "online"
            })
            if(props.paymentError.status) {
                props.setPaymentError({
                    status: false,
                    message: ""
                });
            }
        } else {
            props.setPaymentError({
                status: true,
                message: "Card Pin"
            })
        }
    }

    return (
        <div><Transition activeAnimation={activeAnimation} setPin={setPin} handleVerifyPin={handleVerifyPin} /></div>
    )
}

export default OnlineTransition;