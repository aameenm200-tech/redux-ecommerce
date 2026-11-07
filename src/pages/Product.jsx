import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../redux/slices/productSlice';

function Product() {

const {loading,allProducts,error} = useSelector(state=>state.productReducer)

const dispatch = useDispatch()

useEffect(()=>{
dispatch(getAllProducts())
},[])
    return (
        <div className='m-5'>
            {
                loading?
                <div className='text-center py-5 fw-bolder'>LOADING.....</div>
                :
                <div className="row pt-5 g-3">
                {/* duplicate column according to products */}
               {
                allProducts.length>0?
                 allProducts.map(product=>(
                    <div key={product?.id} className="col-lg-3">
                    {/* cards */}
                    <Card className='shadow '>
                        <Card.Img style={{height:'300px'}} variant="top" src={product.thumbnail} />
                        <Card.Body className='text-center'>
                            <Card.Title>{product?.title}</Card.Title>
                          <Link to={`/product/${product?.id}`}  className='btn btn-outline-info'>View More</Link>
                        </Card.Body>
                    </Card>

                </div>
                 ))
                :
                <div className='fw-bolder'>No Products Found</div>
               }
            </div>
            }
        </div>
    )
}

export default Product
