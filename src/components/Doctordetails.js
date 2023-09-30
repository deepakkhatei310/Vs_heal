import React, { useState } from 'react'
import doctor1 from '../images/Priyanka-Gupta.jpg'
import medlogo from '../images/Default-Clinic_Icon_150.webp'
import text_l from '../images/text-consult-web.svg'
import video_l from '../images/video-consult-web.svg'
import phone_l from '../images/phone-consult-web.svg'

const Doctordetails = () => {
  
  const [data , setDatas] = useState("gethelp")
  
  const handle_filter = (filter_cate) =>{
    setDatas(filter_cate)
  }

  return (
    <section>
        <div className="doctor_details" style={{padding:"6rem 7rem"}}>
            <div className="search_options">
              <div className="row">
                <div className="col-lg-2 col-md-6">
                  <input type="text" name="" id=""  className='form-control' placeholder='Enter City'/>
                </div>
                <div className="col-lg-2 col-md-6">
                  <input type="text" name="" id=""  className='form-control' placeholder='Enter Locality'/>
                </div>
                <div className="col-lg-5 col-md-12">
                  <input type="text" name="" id=""  className='form-control' placeholder='Speciality/Stmptomps/Doctor/clinic'/>
                </div>
                <div className="col-lg-3">
                  <button className='btn btn-success'>Search</button>
                </div>
              </div>
            </div>
            <div className="doctor_cards border p-4" style={{background:"white", marginTop:"20px"}}>

             <div className="doctor_info d-flex">
             <img src={doctor1} alt="" height={"130px"}/>
         <div className="info">
           <ul>
        <li><h5>Dr.Priyanka Gupta</h5></li> 
      <li style={{fontWeight:"bold", color:"#36c940"}}>Dermatologist.16 Exp.</li>
      <li>MBBS, MD Dermatology, Venereology & Leprosy, Cosmetologist</li>
      <li><i class="bi bi-translate"></i><span>Hindi ,English</span> </li>
      <li><i class="bi bi-geo-alt"></i> <span>Hyderabad</span></li>
     <li>
      <span><i class="bi bi-cash"></i> <b> <i class="bi bi-currency-rupee"></i> 300 </b> at clinic</span>
      <span className='ms-3'><i class="bi bi-credit-card"></i> <b><i class="bi bi-currency-rupee"></i> 500</b>  at online</span>
     </li>
    </ul>
    
  </div>
             </div>
            <div className="consult_btns d-flex justify-content-center gap-3">
            <button className='details_btn'>
            <p className='btn_book' style={{marginBottom:"0"}} >Book Appointment</p> <span className='btns_text'>No Booking fee</span>
             </button>
            <button  className='btn_consult'><p className='text_consult'>Consult Online</p> <span>Upto 30% oFF</span> </button>
             <button className='call_option'> <p className='call_text'> Call Doctor</p></button>
             </div>
            </div>

            <div className="filter_details">
            <div className="row">
              <div className="col-lg-5">
               <div className="doctoe_details_part border">
                 <div className="clinic_detail d-flex justify-content-between">
                    <ul>
                      <li><h5>Clinic Name</h5></li>
                      <li>Clinic Address</li>
                      <li>consulation Fee: <span>300</span></li>
                    </ul>
                    <div className="switch_clinic">
                      <a href="">Change Clinic</a>
                    </div>
                 </div>
                 <div className="app_date border" style={{background:"grey"}}>

                 </div>
                 <div className="timimg">
                  <p>Morning</p>
                  <div className="time_slot">
                    <button className='timing_btn'>5.00 AM</button>
                    <button className='timing_btn'>5.15 AM</button>
                    <button className='timing_btn'>5.30 AM</button>
                    <button className='timing_btn'>5.45 AM</button>
                    <button className='timing_btn'>6.00 AM</button>
                    <button className='timing_btn'>6.15 AM</button>
                    <button className='timing_btn'>6.30 AM</button>
                    <button className='timing_btn'>6.45 AM</button>
                  </div>
                 </div>
                <div className="view_all_slot text-center" style={{paddingTop:"6rem"}}>
                  <span>View All Slots</span>
                </div>
               </div>
                <div className="row mt-5">
                  <div className="col-lg-12">
                     <h5>Personal Statement</h5>
                     <div className="doctor_statement border" style={{background:"white", padding:"5px"}}>
                       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt beatae eum esse omnis deleniti! Laborum nisi dolore aut ratione asperiores.</p>
                     </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-12" >
                    <h5>Doctor Information</h5>
                    <div className="doctor_info border" style={{borderRadius:"5px",background:"white"}}>
                      <ul>
                        <li>
                        <h5>Speciality</h5> 
                        <ul>
                          <li>lorem</li>
                        </ul>
                        </li>
                        <li>
                        <h5>Other treatment areas</h5>
                        <ul>
                          <li>lorem ipsum</li>
                        </ul>
                        </li>
                        <li>
                          <h5>Education</h5>
                          <ul>
                            <li>MBBS</li>
                            <li>BMS</li>
                            
                          </ul>
                        </li>
                        <li>
                          <h5>Languages spoken</h5>
                          <ul>
                            <li>Hindi</li>
                            <li>English</li>
                            
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                 <div className="filter_btns text-center d-flex border" style={{background:"#fff", width:"100%"}}>
                  <div className={data === "gethelp" ? "help_btn_active" : "help_btn"} onClick={()=>handle_filter("gethelp")}>
                    Get Help
                  </div>
                  <div className={data === "reviews"? "help_btn_active" : "help_btn"} onClick={()=>handle_filter("reviews")}>
                    Reviews 
                  </div>
                  <div className={data === "services"? "help_btn_active" : "help_btn"} onClick={()=>handle_filter("services")}>
                    Services
                  </div>
                  {/* <div className={data === "qna"? "help_btn_active" : "help_btn"} onClick={()=>handle_filter("qna")}>
                    QnA
                  </div> */}
                  <div className={data === "tips"? "help_btn_active" : "help_btn"} onClick={()=>handle_filter("tips")}>
                    Tips
                  </div>
                 </div>
                 <div>
                  
                 </div>
                   <div>
                   </div>
                   {
                    data === "gethelp" &&(
                      <div>
                        <h5>Book Clinic Appointment with Dr.Priyanka Gupta</h5> 
                        <div className="row">
                          <div className="col-lg-12 border" style={{borderRadius:"10px", padding:"10px"}}>
                            <div className="hospital_detail d-flex align-items-center">
                              <img src={medlogo} alt="" />
                              <div className="hospial_name">
                                <a href="" style={{textDecoration:"none", color:"black", fontSize:"20px", fontWeight:"500"}}>Hospital Name</a>
                                 <p style={{fontSize:"15px"}}>Hospital address</p>
                                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.4446 0.270972C5.35889 0.104561 5.18728 0 5.00012 0C4.81296 0 4.64144 0.104551 4.55564 0.270972L3.19832 2.90526L0.404813 3.44683C0.227688 3.48116 0.0827967 3.60831 0.0257095 3.77942C-0.0313799 3.9506 0.00813103 4.13919 0.129088 4.27304L2.09924 6.45195L1.72282 9.43746C1.69971 9.6207 1.77949 9.80175 1.93033 9.90832C2.08117 10.0149 2.27847 10.0297 2.44345 9.94674L5.00016 8.66149L7.55687 9.94674C7.72186 10.0297 7.91915 10.0149 8.06999 9.90832C8.22083 9.80176 8.30061 9.6207 8.2775 9.43746L7.90108 6.45195L9.87123 4.27304C9.99227 4.13919 10.0317 3.95059 9.97461 3.77942C9.91752 3.60832 9.77262 3.48116 9.59551 3.44683L6.802 2.90526L5.4446 0.270972Z" fill="#00A600"></path></svg>
                                 <span style={{fontSize:"12px", marginLeft:"5px"}}>4.5</span>
                                 <p><i class="bi bi-cash"></i> <b> <i class="bi bi-currency-rupee"></i> 300 </b> at clinic</p>
                              </div>
                            </div>
                            <div className="consult_buttons">
                               <div className="row">
                                <div className="col-lg-6">
                                  <button className='btn_one'>Call clinic</button>
                                </div>
                                <div className="col-lg-6">
                                   <button className='btn_two'><p style={{marginBottom:"0", fontSize:"15px", color:"white", fontWeight:"bold"}}>Book Appointment</p> <span style={{fontSize:"10px"}}>No Booking fee</span></button>
                                </div>
                               </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                   }
                 {data === "reviews" &&(
                  <div>
                    <h5>Patient Review Highlights</h5>
                    <div>
                       <div className="row">
                        <div className="col-lg-12">
                           <div className="review_container border p-3">
                             <div className="review_cards d-flex justify-content-between">
                               <div className="r_card border p-2">
                                <p className='review_text'>Very Helpful</p>
                               </div>
                               <div className="r_card border p-2">
                               <p className='review_text'>Very Helpful</p>
                               </div>
                               <div className="r_card border p-2">
                               <p className='review_text'>Very Helpful</p>
                               </div>
                               <div className="r_card border p-2">
                               <p className='review_text'>Very Helpful</p>
                               </div>
                               
                             </div>
                           </div>
                        </div>
                       </div>
                       <h5>Submit Feedback</h5>
                        <div className="review_write_box d-flex justify-content-between border p-3">
                          <div className="doctor_name">
                            <span>Submit a review for doctor name</span>
                          </div>
                          <div className="review_btn">
                            <button className='btn btn-success'>Write A review</button>
                          </div>
                        </div>
                    </div>
                  </div>
                 ) 
                 }
                 {data === "services" &&(
                  <div>
                    <h5>Consult Online</h5>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="services_card d-flex">
                         <div class="card" style={{width:"18rem"}}>
                         <img src={text_l} class="card-img-top" alt="..."/>
                         <div class="card-body">
                          <h5 class="card-title">Text consult</h5>
                          <ul>
                              <li>15 minutes call duration & 24 hours text chat Days Validity</li>
                              <li>₹ 1,000</li>
                             </ul>
                            <a href="#" class="btn btn-success">Consult Now</a>
                            </div>
                         </div>
                         <div class="card" style={{width:"18rem"}}>
                         <img src={video_l} class="card-img-top" alt="..."/>
                         <div class="card-body">
                          <h5 class="card-title">Video Consult</h5>
                            <ul>
                              <li>15 minutes call duration & 24 hours text chat Days Validity</li>
                              <li>₹ 1,000</li>
                             </ul>
                            <a href="#" class="btn btn-success">Consult Now</a>
                            </div>
                         </div>
                         <div class="card" style={{width:"18rem"}}>
                         <img src={phone_l} class="card-img-top" alt="..."/>
                         <div class="card-body">
                          <h5 class="card-title">Audio consult</h5>
                             <ul>
                              <li>15 minutes call duration & 24 hours text chat Days Validity</li>
                              <li>₹ 1,000</li>
                             </ul>
                            
                            <a href="#" class="btn btn-success">Consult Now</a>
                            </div>
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 ) 
                 }
                 {/* {data === "qna" &&(
                  <div>
                    <h5>Question and Answers</h5>
                  </div>
                 ) 
                 } */}
                 {data === "tips" &&(
                  <div>
                    <h5>Health Tips</h5>
                  </div>
                 ) 
                 }
              </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Doctordetails