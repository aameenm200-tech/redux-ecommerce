import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product() {
    return (
        <div className='m-5'>
            <div className="row pt-5">
                {/* duplicate column according to products */}
                <div className="col-lg-3">
                    {/* cards */}
                    <Card className='shadow '>
                        <Card.Img style={{height:'300px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oE4LpbeiLOHJpAqYwWwlxJKqgBsLtLeH8ZsKC62sVQ&s=10" />
                        <Card.Body className='text-center'>
                            <Card.Title>Perfume</Card.Title>
                          <Link to={`/product/:id`}  className='btn btn-info'>View More</Link>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default Product
