import { FaStar } from "react-icons/fa";
import React from 'react'
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


function View() {

  const {id} = useParams()
  console.log(id);
  const {allProducts} = useSelector(state=>state.productReducer)
  console.log(allProducts);
  
  
  return (
    <>
    <Header/>
    <div className="container my-5 pt-5">
      <div style={{height:"80vh"}} className="row">
        <div className="col-lg-6 text-center">
          <img className='img-fluid' style={{height:"500px"}} src="https://png.pngtree.com/png-clipart/20240826/original/pngtree-realistic-watch-image-png-image_15852956.png" alt="" />
          <div className="d-flex justify-content-evenly mt-5">
            <button className='btn btn-outline-warning'>ADD TO WISHLIST</button>
            <button className='btn btn-outline-success'>ADD TO CART</button>
          </div>
        </div>
        <div className="col-lg-6">
          <h3>title</h3>
          <h2>$ 30</h2>
          <h4>Brand :</h4>
          <h4>Category :</h4>
          <h5>Client Reviews</h5>
          <div className="border shadow rounded my-5 p-3">
            <p><span className='fw-bolder'>Name :</span> message</p>
            <p>Rating : 5 <FaStar className="text-warning"/></p>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default View
