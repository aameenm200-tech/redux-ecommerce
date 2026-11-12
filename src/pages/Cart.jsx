import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCart, emptyCart, incrementCart, removeCartItem } from '../redux/slices/cartSlice';
import Swal from 'sweetalert2';


function Cart() {

  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [cartTotal,setCartTotal] = useState(0)
  const Navigate = useNavigate()

  useEffect(()=>{
setCartTotal(userCart?.reduce((Acc,curr)=>Acc+curr.totalPrice,0))
  },[userCart])

  const handleDecrement = (product)=>{
if(product.quantity>1){
  dispatch(decrementCart(product.id))
}else{
  dispatch(removeCartItem(product.id))
}
  }

  const handleCheckOut = ()=>{
    dispatch(emptyCart())
    Swal.fire({
title:"Order Placed Successfully",
text:"Thankyou For Purchasing with Us",
icon:"success",
confirmButtonText:"OK"
    })
    Navigate('/')
  }
  return (
    <>
      <Header />
      {
      userCart?.length>0 ?

      <div className='container my-5'>
        <h1 className='pt-5 text-primary fw-bolder'>CART</h1>
        <div className="row">
          <div className="col-lg-8 shadow">

            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  userCart.map((item,index)=>(
                    <tr key={item?.id}>
                  <td>{index+1}</td>
                  <td>{item?.title}</td>
                  <td><img style={{ width: "50px", height: "50px" }} src={item?.thumbnail} alt="" /></td>
                  <td>
                    <div className='d-flex '>
                      <button onClick={()=>handleDecrement(item)} className='btn fs-4 fw-bold'>-</button>
                      <input style={{ width: '50px' }} value={item?.quantity} type="text" className='form-control mx-2' readOnly />
                      <button onClick={()=>dispatch(incrementCart(item?.id))} className='btn fs-4 fw-bold'>+</button>
                    </div>
                  </td>
                  <td>{item?.totalPrice}</td>
                  <td><button onClick={()=>dispatch(removeCartItem(item?.id))} className='btn btn-danger'><MdDelete className='fs-4' /></button></td>
                </tr>
                  ))
                }
              </tbody>
            </table>
            <div className='float-end p-3'>
              <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>Empty Cart</button>
              <Link to={"/"} className='btn btn-primary ms-5'>Shop more</Link>
            </div>

          </div>
          <div className="col-lg-4">
            <div className="shadow rounded p-5 text-center">
              <h2>Total Amount : <span className='text-danger'>$ {cartTotal}</span></h2>
              <hr />
              <button onClick={handleCheckOut} className='btn btn-success w-75'>Check Out</button>
            </div>
          </div>
        </div>
      </div>

      :
// empty Cart
      <div className='d-flex justify-content-center align-items-center flex-column my-5'>
        <img className='my-5' height={"400px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnmWnFyl_zHJokvH2BYJGz6tqxUrg8KoyXYTkvRzbDQ&s=10" alt="" />
        <h1>Your Cart Is Empty !!</h1>
        <Link to={'/'} className='btn btn-success'>Add More</Link>
      </div>
      }
    </>
  )
}
l
export default Cart
