import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../redux/slices/productSlice';
import Header from '../Components/Header';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Product() {

const {loading,allProducts,error} = useSelector(state=>state.productReducer)

const dispatch = useDispatch()
// pagination simple logic
const [currentPage,setCurrentPage] = useState(1)
const productPerPage = 8
const totalPages = Math.ceil(allProducts?.length/productPerPage)
const currentPageLastIndex = currentPage * productPerPage
const currentPageFirstIndex = currentPageLastIndex - productPerPage
const visibleProductsArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

const navigateNextPage = ()=>{
    currentPage!= totalPages && setCurrentPage(currentPage+1)
}

const navigatePreviousPage = ()=>{
    currentPage!= 1 && setCurrentPage(currentPage-1)
}

useEffect(()=>{
dispatch(getAllProducts())
},[])
    return (
        <>
        <Header insideproduct/>
        <div className='m-5'>
            {
                loading?
                <div className='text-center py-5 fw-bolder'>LOADING.....</div>
                :
                <div className="row pt-5 g-3">
                {/* duplicate column according to products */}
               {
                allProducts.length>0?
                 visibleProductsArray.map(product=>(
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
            <div className='text-center my-5 fw-bolder'>
                <button onClick={navigatePreviousPage} className='btn mx-2' ><IoChevronBack /></button>
                {currentPage} OF {totalPages}
                <button onClick={navigateNextPage} className='btn mx-2'><IoChevronForward /></button>

            </div>
        </div>
        </>
    )
}

export default Product
