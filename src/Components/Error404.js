import React from 'react'
import error404 from '../Asset/img/404.gif'

const Error404 = () => {
  return (
    <div className='background-img' style={{backgroundImage: `url(${error404})`, minHeight: "100vh",backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
  )
}

export default Error404