import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCircleXmark } from "react-icons/fa6";
import Header from '../Components/Header'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeWislistItem } from '../redux/slices/wishlistSlice';
import {addCart} from "../redux/slices/cartSlice"
import Swal from "sweetalert2";



function Wishlist() {
  const userWishlist = useSelector(state => state.wishlistReducer)
    const userCart = useSelector(state=> state.cartReducer)
  const dispatch = useDispatch()

    const handleCart = (product) => {
      // check the product already in the cart 
      const existingItem = userCart?.find(item => item?.id==product?.id)
      dispatch(addCart(product))
      dispatch(removeWislistItem(product.id))
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
      <div className='container my-5'>

        {userWishlist?.length>0 ?
          <>
            <h1 className='pt-5 text-primary fw-bolder'>WISHLIST</h1>
            <div className="row pt-5">
              {/* duplicate column according to products */}
              {
                userWishlist?.map(item => (
                  <div className="col-lg-3">
                    {/* cards */}
                    <Card className='shadow '>
                      <Card.Img style={{ height: '300px' }} variant="top" src={item?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{item?.title}</Card.Title>
                        <div className="d-flex justify-content-evenly">
                          <button onClick={()=>dispatch(removeWislistItem(item?.id))} className='btn btn-danger'> <FaHeartCircleXmark className='fs-3' /> </button>
                          <button onClick={()=>handleCart(item)} className='btn btn-success'><FaCartPlus className=' fs-3' /> </button>
                        </div>
                      </Card.Body>
                    </Card>

                  </div>
                ))
              }
            </div>
          </>
          :
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img className='my-5' height={"400px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnmWnFyl_zHJokvH2BYJGz6tqxUrg8KoyXYTkvRzbDQ&s=10" alt="" />
            <h1>Your Wishlist Is Empty !!</h1>
            <Link to={'/'} className='btn btn-success'>Add More</Link>
          </div>
        }
      </div>
    </>
  )

}

export default Wishlist

