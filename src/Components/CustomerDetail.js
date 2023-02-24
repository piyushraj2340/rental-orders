import React from 'react'


const CustomerDetail = (props) => {
    return (
        <> <div className="col p-2">
            <div className="row d-flex justify-content-center">
                <div className="col p-5 border">
                    <form method='post'>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Name" name="customerName" onChange={props.handleCustomerInput} value={props.user.customerName} />
                        </div>
                        <div className="mb-3">
                            <label for="number" className="form-label">Number:</label>
                            <input type="number" className="form-control" id="name" placeholder="Enter Number" name="customerPhone" onChange={props.handleCustomerInput} value={props.user.customerPhone} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label for="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="customerEmail" onChange={props.handleCustomerInput} value={props.user.customerEmail} />
                        </div>
                        <div className='mb-3 mt-3'>
                            <label for="comment">Address:</label>
                            <textarea className="form-control" rows="5" id="address" name="customerAddress" onChange={props.handleCustomerInput} value={props.user.customerAddress}></textarea>
                        </div>
                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="termsAndConditions" onChange={props.handleCustomerInput} checked={props.user.termsAndConditions} /> terms and conditions
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mt-3">
                <div className='col d-flex justify-content-between ms-5 me-5'>
                    <button className='btn btn-primary' onClick={props.handleCustomerPrevious}>Previous</button>
                    <button className='btn btn-primary' onClick={props.handleCustomerNext}>Next</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CustomerDetail;