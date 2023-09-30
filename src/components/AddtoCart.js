import React from 'react'
import primg1 from '../images/Coconut-Oil_gd2vg8.jpg'
import primg2 from '../images/Ghee_jm8r9h.jpg'
const AddtoCart = () => {
  return (
    <>
     <div className="main_market">
        </div>
    <div className="add_to_basket" style={{padding:"20px 5rem"}}>
        <div class="row">
  <h1 class="text-center mb-5">Shopping Cart</h1>
  <div class="col-sm-8">
  <div class="card">
   <div class="card-body">
    <h3>Cart</h3>
    <div class="row">
     <div class="col-sm-3 text-center align-self-center"><img src={primg1} alt="" srcset="" class="img-fluid img-thumbnail shadow-sm" height="150" width="150"/> </div>
     <div class="col-sm-9">
      <div>
       <h5>Organic Coconut Oil</h5>
       <p class="mb-2 text-muted small">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas, nihil vel velit sed, quos consequatur maiores odio libero eius est in mollitia quo minus dolorum culpa consectetur, ipsam unde!</p>
       <div class="my-3">
        <label for="quantity">Quantity:</label>
        <a class="minus-cart btn"><i class="fas fa-minus-square fa-lg"></i></a>
          <span id="quantity">3</span>
        <a class="plus-cart btn"><i class="fas fa-plus-square fa-lg"></i></a>
       </div> 
       <div class="d-flex justify-content-between">
        <a href="#" class="btn btn-sm btn-secondary mr-3">Remove item </a>
        <p class="mb-0"><span><strong>Rs. 110.00</strong></span></p>
       </div>
      </div>
     </div>
    </div>
    <hr class="text-muted"/>
    <div class="row my-5">
     <div class="col-sm-3 text-center align-self-center"> <img src={primg2} alt="" srcset="" class="img-fluid img-thumbnail shadow-sm" height="150" width="150"/></div>
     <div class="col-sm-9"> 
      <div>
       <h5>Organic Ghee</h5>
       <p class="mb-2 text-muted small">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti repudiandae quas tenetur? Vel harum iste impedit ad cupiditate sint soluta consequuntur sed, enim, eligendi labore molestiae! Mollitia, ad exercitationem!</p>
       <div class="my-3">
        <label for="quantity">Quantity:</label>
        <a class="minus-cart btn"><i class="fas fa-minus-square fa-lg"></i></a>
          <span id="quantity">2</span>
        <a class="plus-cart btn"><i class="fas fa-plus-square fa-lg"></i></a>
       </div> 
       <div class="d-flex justify-content-between">
        <a href="#" class="btn btn-sm btn-secondary mr-3">Remove item </a>        
        <p class="mb-0"><span><strong>Rs. 320.00</strong></span></p>
       </div>
      </div>
     </div>
    </div>
   </div>
   </div>
  </div>

  <div class="col-sm-4">
   <div class="card">
    <div class="card-body">
      <h3>The Total Amount of</h3>
      <ul class="list-group">
       <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">Amount<span>Rs. 430.00</span></li>
       <li class="list-group-item d-flex justify-content-between align-items-center px-0">Shipping<span>Rs. 70.00</span></li>
       <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
        <div>
           <strong>Total</strong> <small>(including VAT)</small>
         </div>
         <span><strong>Rs. 500.00</strong></span>
       </li>
      </ul>
      <div class="d-grid"><a href="" class="btn btn-success">Place Order</a></div>
    </div>
   </div>
  </div>
  
 </div>
        </div>
    </>
  )
}

export default AddtoCart