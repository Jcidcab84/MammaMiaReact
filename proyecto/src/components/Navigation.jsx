import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/pizza.id">Pizza</Link>
    <Link to="/carrito">Carrito</Link>
    <Link to="*">Carrito</Link>
    </>
  )
}

export default Navigation