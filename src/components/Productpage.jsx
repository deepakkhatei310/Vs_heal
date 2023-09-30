import React from 'react'
import {NavLink, useNavigate, useParams } from 'react-router-dom'
import image1 from '../images/Ghee_jm8r9h.jpg'
const Productpage = ({product}) => {
  const{id} = useParams()
  
  return (
    <>
     <div className="main_market">
        </div>
    <div className="products_details" style={{padding:"70px 5rem"}}>
      <div className="row">
        <div class="col-sm-6 text-center align-self-center">
         <img src={image1} alt="" class=" img-thumbnail" height={"200px"}/>
        </div>
        <div className="col-sm-5">
        <h2>Product Title: Product 1</h2>
        <hr/>
        <p>Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!</p> <br/>
        <h4>Rs.650 <small class="fw-light text-decoration-line-through">1000</small></h4> <br/>
        <NavLink to='/addtocart'  className="btn btn-success shadow px-5 py-2 product_detail_btn" >Add to Cart</NavLink>
        <NavLink  className="btn btn-danger shadow px-5 py-2 ms-4 product_detail_btn" >Save Later</NavLink>
        <h5 class="mt-5">Available Offers</h5>
        <ul>
         <li>Buy 2 get 1 free</li>
         <li>Special offer Get extra ₹200 off (price inclusive of discount)</li>
         <li>Cash on Delivery</li>
         <li>Cashback through online transaction</li>
        </ul>    
        </div>
      </div>
    </div>
    </>
  )
}

export default Productpage