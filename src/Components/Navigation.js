import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Automobile Rental</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cards">Saved Card</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/payments">Payments</Link>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search Keywords" />
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navigation