import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'


function Pagenotfound() {
  return (
    <>
    <Header/>
      <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img style={{}} src="https://t3.ftcdn.net/jpg/16/02/59/84/360_F_1602598461_Zbf6xlcSjbP3wPWyM8xX2JjZTdNeMTro.jpg" alt="not found" />
      <h1 className='my-5'>WE ARE SORRY, LOOKS LIKE YOU'RE LOST </h1>
      <Link to={'/'} className='btn btn-dark p-2'>BACK TO HOME</Link>
    </div>
    </>
  )
}

export default Pagenotfound
