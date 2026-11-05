import React from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Cart() {
  return (
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
              <tr>
                <td>1</td>
                <td>Watch</td>
                <td><img style={{ width: "50px", height: "50px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oE4LpbeiLOHJpAqYwWwlxJKqgBsLtLeH8ZsKC62sVQ&s=10" alt="" /></td>
                <td>
                  <div className='d-flex '>
                    <button className='btn fs-4 fw-bold'>-</button>
                    <input style={{width:'40px'}} value={10} type="text" className='form-control mx-2' readOnly />
                    <button className='btn fs-4 fw-bold'>+</button>
                  </div>
                </td>
                <td>$10</td>
                <td><button className='btn btn-danger'><MdDelete className='fs-4' /></button></td>
              </tr>
            </tbody>
          </table>
<div className='float-end p-3'>
<button className='btn btn-danger'>Empty Cart</button>
<Link to={"/"} className='btn btn-primary ms-5'>Shop more</Link>
</div>

        </div>
        <div className="col-lg-4">
<div className="shadow rounded p-5 text-center">
  <h2>Total Amount : <span className='text-danger'>$ 300</span></h2>
  <hr />
  <button className='btn btn-success w-75'>Check Out</button>
</div>
        </div>
      </div>
    </div>
  )
}

export default Cart
