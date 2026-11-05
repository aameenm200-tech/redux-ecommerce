import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCircleXmark } from "react-icons/fa6";


function Wishlist() {
  return (
    <div className='container my-5'>
      <h1 className='pt-5 text-primary fw-bolder'>WISHLIST</h1>
      <div className="row pt-5">
                {/* duplicate column according to products */}
                <div className="col-lg-3">
                    {/* cards */}
                    <Card className='shadow '>
                        <Card.Img style={{height:'300px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oE4LpbeiLOHJpAqYwWwlxJKqgBsLtLeH8ZsKC62sVQ&s=10" />
                        <Card.Body className='text-center'>
                            <Card.Title>Perfume</Card.Title>
                          <div className="d-flex justify-content-evenly">
                            <button className='btn btn-danger'> <FaHeartCircleXmark className='fs-3'/> </button>
                            <button className='btn btn-success'><FaCartPlus className=' fs-3' /> </button>
                          </div>
                        </Card.Body>
                    </Card>

                </div>
            </div>
    </div>
  )
}

export default Wishlist

