import React from 'react'
import Headers from "./Headers";
import Products from "./Products";

const Home = () => {
    document.title = "Automobile Rental";
    return (
        <>
            <Headers />
            <Products />
        </>
    )
}

export default Home