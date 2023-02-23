import React from 'react'
import headerImg from '../Asset/img/header-image.png'

const Headers = () => {
    return (
        <div class="p-5 bg-light text-dark">
            <div className="row d-flex justify-content-around">
                <div className="col-md-5 p-2">
                    <img src={headerImg} width="100%" height="340px" alt="header-car-image" className='img-fluid rounded' />
                </div>
                <div className="col-md-7 text-center">
                    <h1 className='display-3 p-4 h1'>Welcome to automobile rental service.</h1>
                    <p className='blockquote'>Go to the products section for renting automobiles or scroll down.</p>
                </div>
            </div>
        </div>
    )
}

export default Headers;