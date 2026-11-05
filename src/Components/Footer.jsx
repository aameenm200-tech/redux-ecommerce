import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


function Footer() {
  return (
    <div className="p-5 text-light" style={{ height: "280px", backgroundColor:"#0B2B26"}}>
      <div className='row'>
        <div className="col-lg-3 ">
          <div className="d-flex">
            <FaShippingFast className='fs-2' />
            <h3>Daily Cart</h3>
          </div>
          <p>design and bulit with all the love in the world by the luminar team with the help of our contributors</p>
          <p>code licensed luminar , docs CC BY 3.0.</p>
          <p>currently v5.3.2</p>
        </div>
        <div className="col-lg-3 ">
          <h3>Links</h3>
          <div className='lh-sm'>
            <p>Home</p>
            <p>wishlist</p>
            <p>Cart</p>
          </div>
        </div>
        <div className="col-lg-3">
          <h3>Guides</h3>
          <div className='lh-sm'>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>React router</p>
          </div>
        </div>
        <div className="col-lg-3">
          <h3>Contact Us</h3>
          <div className='d-flex'>
            <input type="email" class="form-control w-75" id="" placeholder="Email"></input>
            <button type="submit" class="btn btn-success mx-2">send</button>
          </div>
          <div className='my-3 '>
            <div className='hstack gap-4'>
              <FaFacebook className='fs-4' />
              <FaTwitter className='fs-4' />
              <FaInstagram className='fs-4' />
              <IoLogoWhatsapp className='fs-4' />
              <MdMessage className='fs-4' />
              <FaPhoneAlt className='fs-4' />
            </div>
          </div>
        </div>
      </div>

      <div className='text-center'>
        copyright july 2026 batch, Daily cart . Build with React Redux
      </div>
    </div >
  )
}

export default Footer
