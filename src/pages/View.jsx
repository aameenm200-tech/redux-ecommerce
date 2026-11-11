import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import {addCart} from "../redux/slices/cartSlice"


function View() {

  const { id } = useParams()
  console.log(id);
  const { allProducts } = useSelector(state => state.productReducer)
  const [product, setProduct] = useState({})
  const userWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state=> state.cartReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    setProduct(allProducts?.find(item => item.id == id))
  }, [])

  console.log(product);

  const handleWishList = () => {
    // check the product already in the wishlist 
    const existingItem = userWishlist?.find(item => item?.id == product?.id)
    if (existingItem) {
      Swal.fire({
        title: "sorry",
        text: "Item Already In Your Wishlist",
        icon: "error",
        confirmButtonText: "ok"
      })
    } else {
      dispatch(addToWishlist(product))
    }
  }


  const handleCart = () => {
    // check the product already in the cart 
    const existingItem = userCart?.find(item => item?.id==product?.id)
    dispatch(addCart(product))
      Swal.fire({
        title: "success",
        text: existingItem?`${existingItem.title} quantity increased`:"Product Added Successfully",
        icon: "success",
        confirmButtonText: "ok"
      })
   
  }

  return (
    <>
      <Header />
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img className='img-fluid' style={{ height: "500px" }} src={product?.thumbnail} alt="" />
            <div className="d-flex justify-content-evenly mt-5">
              <button onClick={handleWishList} className='btn btn-outline-warning'>ADD TO WISHLIST</button>
              <button onClick={handleCart} className='btn btn-outline-success'>ADD TO CART</button>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>{product?.title}</h3>
            <h2>$ {product?.price}</h2>
            <h4>Brand : {product?.brand}</h4>
            <h4>Category : {product?.category}</h4>
            <h4>Description : {product?.description}</h4>
            <h5>Client Reviews</h5>
            {
              product?.reviews?.map((item, index) => (
                <div key={index} className="border shadow rounded my-5 p-3">
                  <p><span className='fw-bolder'>Name : {item?.reviewerName}</span> {item?.comment}</p>
                  <p>Rating : {item?.rating} <FaStar className="text-warning" /></p>
                </div>

              ))
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default View
