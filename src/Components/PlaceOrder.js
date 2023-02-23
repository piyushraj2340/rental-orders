import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import card from '../API/card'
import OrderSummary from './OrderSummary';
import CustomerDetail from './CustomerDetail';
import Payment from './Payment';


const PlaceOrder = (props) => {
    document.title = "book your automobile rental";
    const [errorCount, setErrorCount] = useState(5);
    const [activeForm, setActiveForm] = useState(0);

    const [data, setData] = useState({
        productId: props.product.productId,
        productName: props.product.productName,
        productCategory: props.product.productCategory,
        productDescription: props.product.productDescription,
        rating: props.product.rating,
        noOfRatings: props.product.noOfRatings, 
        price: props.product.price,
        image: props.product.image,
        orderId: "",
        orderDate: ""
    });

    const [user, setUser] = useState({
        customerName: "",
        customerPhone: "",
        customerEmail: "",
        customerAddress: "",
        termsAndConditions: false
    });



    const Heading = ["1. Order Summary", "2. Customer details", "3. Payments"]

    const navigate = useNavigate();

    useEffect(() => {
        if (props.product.length === 0) {
            let x = setTimeout(() => {
                if (errorCount === 0) {
                    clearInterval(x);
                    navigate("/products")
                }
                setErrorCount(errorCount - 1);
            }, 1000)
        } else {
            var date = new Date();
            var dateTime = date.getDate() + "/"
                + (date.getMonth() + 1) + "/"
                + date.getFullYear() + " | "
                + date.getHours() + ":"
                + date.getMinutes() + ":"
                + date.getSeconds();
            setData({...props.product, ["orderId"]: `${props.product.productId}${Date.now()}`, ["orderDate"]: dateTime })
        }
    }, [errorCount])

    const handleSummaryNext = (e) => {
        setActiveForm(1);
    }

    const handleCustomerPrevious = (e) => {
        setActiveForm(0);
    }

    let name, value;
    const handleCustomerInput = (e) => {
        if (e.target.type == 'text' || e.target.type == 'number' || e.target.type == 'email' || e.target.type == 'textarea') {
            name = e.target.name;
            value = e.target.value;
        } else {
            name = e.target.name;
            value = e.target.checked;
        }

        setUser({ ...user, [name]: value })
    }


    const handleCustomerNext = (e) => {
        if (user.customerName.length == 0 || user.customerEmail.length == 0 || user.customerPhone.length == 0 || user.customerAddress.length == 0) {
            alert("Some of the input are not filled!...");
        } else if (!user.termsAndConditions) {
            alert("Please agree the terms and conditions...");
        } else {
            setData({ ...data, ...user });
            setActiveForm(2);
        }
    }

    // let paymentType;
    // if (activePayment == "COD") {
    //     paymentType = (
    //         <>
    //             <p className="text-muted" style={{ fontSize: "14px", margin: "0" }}>payment mode</p>
    //             <p className="card-text">{activePayment}</p>
    //         </>
    //     )
    // } else if (activePayment == "online") {

    // } else if ("online-payment") {
    //     paymentType = (
    //         <>
    //         </>
    //     );
    // } else {
    //     paymentType = (
    //         <>
    //         </>
    //     );
    // }

    let renderForm;
    if (activeForm == 0) {
        renderForm =  <OrderSummary data={data} handleSummaryNext={handleSummaryNext}/>;
    } else if (activeForm == 1) {
        renderForm = <CustomerDetail user={user} handleCustomerInput={handleCustomerInput} handleCustomerNext={handleCustomerNext} handleCustomerPrevious={handleCustomerPrevious}/>;
    } else {
        renderForm = <Payment data={data} user={user} setActiveForm={setActiveForm}/>;
    }

    return (
        <> {
            (props.product.length == 0)
                ?
                <div className="alert alert-danger">
                    <strong>Something Went Wrong!</strong> redirecting in {errorCount}.
                </div>
                :
                <>
                    <div className="container mt-5 p-3 bg-light">
                        <h2 className='text-center'>{Heading[activeForm]}</h2>
                    </div>
                    <div className="container mt-2 bg-light">
                        <ul className="breadcrumb justify-content-center">
                            <li>{Heading[0]} &gt; </li>
                            <li>{Heading[1]} &gt; </li>
                            <li>{Heading[2]} </li>
                        </ul>
                    </div>
                    <div className='container mt-2 p-4 bg-light'>
                        <div className="row">
                            {renderForm}
                        </div>
                    </div>
                </>

        }
        </>
    )

}

export default PlaceOrder;