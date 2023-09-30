import React, { Component } from 'react'
// import product1 from '../images/Draksharishta.jpg'
// import product2 from '../images/Coconut-Oil_gd2vg8.jpg'
// import product3 from '../images/Synotiz_Oil_swgrrs.jpg'
import product_data from './Products'
import { NavLink } from 'react-router-dom'
export default class ShopOnline extends Component {
  render() {
    return (
      <>
        <div className="main_market">
        </div>
        <div className="middle_market">
          <div id='MeetExport' className='container fs-2'>Market Place</div>
        </div>
        <div className="ecom_products">
        <div className="row">
          <div className="col-lg-3">
             <div className="product_filter">
              <div className="product_category">
                <span style={{color:"green", fontSize:"20px" }}>Category</span>
                <ul>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Cold Pressed Oils
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Essential Oils
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Fibre Rich Flours
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Health Care
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Health Supplements
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Healthy Juices
                    </label>
                  </div>
                  </li>
                </ul>
              </div>
              <div className="product_brand">
                 <span style={{color:"green", fontSize:"20px" }}>Brands</span>
                 <ul>
                  <li><div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                     Patanjali
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                     Dabour
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                     Himalya
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Veda
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    ZANDU
                    </label>
                  </div>
                  </li>
                 </ul>
              </div>
              <div className="product_preferance">
                 <span style={{color:"green", fontSize:"20px" }}>Food Preference</span>
                 <ul>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Vegiterian
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                     Non-Vegiterian
                    </label>
                  </div>
                  </li>
                 </ul>
              </div>
              <div className="product_price">
                <span style={{color:"green", fontSize:"20px" }}>Price Range</span>
                <ul>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Rs 101 to Rs 200 (143)
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    Rs 201 to Rs 500 (130)
                    </label>
                  </div>
                  </li>
                  <li>
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                    More than Rs 501 (1366)
                    </label>
                  </div>
                  </li>
                </ul>
              </div>
             </div>
          </div>
          <div className="col-lg-9 ">
            <div className="row">
              <div className="col-lg-10">
                <h4>Ayurveda(All)</h4>
              </div>
              <div className="col-lg-2">
                 <select class="form-select" aria-label="Default select example">
                    <option selected>Popularity</option>
                    <option value="1">Price-Low to High</option>
                    <option value="2">Price-High to Low</option>
                   <option value="3">Best offer Price</option>
                  </select>
              </div>
            </div>
            <div className="produts mt-5">
              <div className="products_card">
                <div className="product_card">
                <div className="row">
                  {
                    product_data.map((data , index)=>{
                      return(
                  <div className="col-lg-4 col-md-6 col-sm-12">
                   <div class="product-card">
		                 <div class="badge">Sale</div>
		                 <div class="product-tumb">
			                <img src={data.name} alt=""/>
		                 </div>
		              <div class="product-details">
			             <span class="product-catagory"> Nityanatha Ayurveda Pharmacy</span>
			               <h4><NavLink to={`/pr_details/${data.id}`}>Draksharishta</NavLink></h4>
			             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			               <div class="product-bottom-details">
				            <div class="product-price"><small>896.00</small>640.99</div>
				            <div class="product-links">
					          <a href=""><i class="fa fa-heart"></i></a>
					           <a href=""><i class="fa fa-shopping-cart"></i></a>
				            </div>
			             </div>
		              </div>
	                  </div>
                  </div>
                      )
                    })
                  }
                  {/* <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="product-card">
		                 <div class="badge">Sale</div>
		                 <div class="product-tumb">
			                <img src={product2} alt=""/>
		                 </div>
		              <div class="product-details">
			             <span class="product-catagory">Nityanatha Ayurveda Pharmacy</span>
			               <h4><a href="">Draksharishta</a></h4>
			             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			               <div class="product-bottom-details">
				            <div class="product-price"><small>896.00</small>640.99</div>
				            <div class="product-links">
					          <a href=""><i class="fa fa-heart"></i></a>
					           <a href=""><i class="fa fa-shopping-cart"></i></a>
				            </div>
			             </div>
		              </div>
	              </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="product-card">
		                 <div class="badge">Sale</div>
		                 <div class="product-tumb">
			                <img src={product3} alt=""/>
		                 </div>
		              <div class="product-details">
			             <span class="product-catagory">Nityanatha Ayurveda Pharmacy</span>
			               <h4><a href="">Draksharishta</a></h4>
			             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			               <div class="product-bottom-details">
				            <div class="product-price"><small>896.00</small>640.99</div>
				            <div class="product-links">
					          <a href=""><i class="fa fa-heart"></i></a>
					           <a href=""><i class="fa fa-shopping-cart"></i></a>
				            </div>
			             </div>
		              </div>
	              </div>
                  </div> */}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>

    )
  }
}
