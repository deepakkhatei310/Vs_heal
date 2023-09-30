import React, { useState } from 'react'
// import varified from '../images/verified.1f87346e730e.svg'
import doctor1 from '../images/Priyanka-Gupta.jpg'
import doctor2 from '../images/Amsa-Pashupathi.jpg'
import doctor3 from '../images/Anusree-R.jpg'
import doctor4 from "../images/Harsha.jpg"
import { NavLink } from 'react-router-dom'
// import doctor5 from '../images/Kanak-Rawat.jpg'
// import doctor6 from '../images/Kanika-Verma.jpg'
// import Slider from 'react-slider';



const MeetExport = () => {
  
  return (
    <>
    <div className="main_market">
    </div>
    <div className="middle_market">
    <div id='MeetExport' className='fs-2'>Meet the Expert</div>
    </div>
    {/* <section className='doctors_section'>
    <div className="search_fileds mt-5">
       <div className="container">
       <div className="row">
       <div className="col-lg-6" style={{position:"relative"}}>
       <span><i class="bi bi-geo-alt" style={{position:"absolute", top:"11px", left:"15px" }}></i></span>
       <input type="search" name="" id="" className='form-control' placeholder='Search location' style={{padding:"10px 26px"}}/>
       </div>
       <div className="col-lg-6" style={{position:"relative"}}>
       <span><i class="bi bi-search" style={{position:"absolute", top:"11px", left:"15px" }}></i></span>
       <input type="search" name="" id="" className='form-control' placeholder='Search doctors,clinics,hosiptals,etc.' style={{padding:"10px 26px"}}/>

       </div>
       </div>

       </div>
       </div>

       <div className="doctors_lis mt-5" >
         <div className="doctors_card d-flex justify-content-between align-items-baseline">
          <div className="doctor_profile d-flex align-items-center">
             <div className="doctor_photo">
             <img src={doctor1} alt="" height={"140px"}/>
             </div>
             <div className="doctor_details">
                <ul>
                 <li>  <h4 style={{color:"#36c940"}}>Dr. Priyanka Gupta</h4></li>      
                 <li><span>15 Years Experience</span></li>
                 <li><span className='fw-bold'>Hyderabad , Virtual Consulation</span></li>
                 <li> <span>IBS, Hormonal Balance, Panchkarma, <br /> Ayurveda Diet, Reproductive Health, Cancer Healing</span></li>
                </ul>
                <hr />
             </div>
          </div>
           <div className="booking_btn">
             <div className="calender_logo">
              <i class="bi bi-calendar-event"></i>
              <span className='ms-2'>Available Tomorrow</span>
             </div>
            <button className='mt-2'>Booking Appointment
              <div>
              <small>No booking fee</small>

              </div>
            </button>
           </div>
         </div>
         <div className="doctors_card d-flex justify-content-between align-items-baseline">
          <div className="doctor_profile d-flex align-items-center">
             <div className="doctor_photo">
             <img src={doctor2} alt="" height={"140px"}/>
             </div>
             <div className="doctor_details">
                <ul>
                 <li>  <h4 style={{color:"#36c940"}}>Dr.Amsa Pasupati</h4></li>      
                 <li><span>15 Years Experience</span></li>
                 <li><span className='fw-bold'>Hyderabad , Virtual Consulation</span></li>
                 <li> <span>IBS, Hormonal Balance, Panchkarma, <br /> Ayurveda Diet, Reproductive Health, Cancer Healing</span></li>
                </ul>
                <hr />
             </div>
          </div>
           <div className="booking_btn">
             <div className="calender_logo">
              <i class="bi bi-calendar-event"></i>
              <span className='ms-2'>Available Tomorrow</span>
             </div>
            <button className='mt-2'>Booking Appointment
              <div>
              <small>No booking fee</small>

              </div>
            </button>
           </div>
         </div>

         <div className="doctors_card d-flex justify-content-between align-items-baseline">
          <div className="doctor_profile d-flex align-items-center">
             <div className="doctor_photo">
             <img src={doctor3} alt="" height={"140px"}/>
             </div>
             <div className="doctor_details">
                <ul>
                 <li>  <h4 style={{color:"#36c940"}}>Dr.Anusree R</h4></li>      
                 <li><span>15 Years Experience</span></li>
                 <li><span className='fw-bold'>Hyderabad , Virtual Consulation</span></li>
                 <li> <span>IBS, Hormonal Balance, Panchkarma, <br /> Ayurveda Diet, Reproductive Health, Cancer Healing</span></li>
                </ul>
                <hr />
             </div>
          </div>
           <div className="booking_btn">
             <div className="calender_logo">
              <i class="bi bi-calendar-event"></i>
              <span className='ms-2'>Available Tomorrow</span>
             </div>
            <button className='mt-2'>Booking Appointment
              <div>
              <small>No booking fee</small>

              </div>
            </button>
           </div>
         </div>
         <div className="doctors_card d-flex justify-content-between align-items-baseline">
          <div className="doctor_profile d-flex align-items-center">
             <div className="doctor_photo">
             <img src={doctor4} alt="" height={"140px"}/>
             </div>
             <div className="doctor_details">
                <ul>
                 <li>  <h4 style={{color:"#36c940"}}>Dr Harsha Khandelwal</h4></li>      
                 <li><span>15 Years Experience</span></li>
                 <li><span className='fw-bold'>Hyderabad , Virtual Consulation</span></li>
                 <li> <span>IBS, Hormonal Balance, Panchkarma, <br /> Ayurveda Diet, Reproductive Health, Cancer Healing</span></li>
                </ul>
                <hr />
             </div>
          </div>
           <div className="booking_btn">
             <div className="calender_logo">
              <i class="bi bi-calendar-event"></i>
              <span className='ms-2'>Available Tomorrow</span>
             </div>
            <button className='mt-2'>Booking Appointment
              <div>
              <small>No booking fee</small>

              </div>
            </button>
           </div>
         </div>
         <div className="doctors_card d-flex justify-content-between align-items-baseline">
          <div className="doctor_profile d-flex align-items-center">
             <div className="doctor_photo">
             <img src={doctor5} alt="" height={"140px"}/>
             </div>
             <div className="doctor_details">
                <ul>
                 <li>  <h4 style={{color:"#36c940"}}>Dr Kanak Rawat</h4></li>      
                 <li><span>15 Years Experience</span></li>
                 <li><span className='fw-bold'>Hyderabad , Virtual Consulation</span></li>
                 <li> <span>IBS, Hormonal Balance, Panchkarma, <br /> Ayurveda Diet, Reproductive Health, Cancer Healing</span></li>
                </ul>
                <hr />
             </div>
          </div>
           <div className="booking_btn">
             <div className="calender_logo">
              <i class="bi bi-calendar-event"></i>
              <span className='ms-2'>Available Tomorrow</span>
             </div>
            <button className='mt-2'>Booking Appointment
              <div>
              <small>No booking fee</small>

              </div>
            </button>
           </div>
         </div>
         <div className="doctors_card d-flex justify-content-between align-items-baseline">
          <div className="doctor_profile d-flex align-items-center">
             <div className="doctor_photo">
             <img src={doctor6} alt="" height={"140px"}/>
             </div>
             <div className="doctor_details">
                <ul>
                 <li>  <h4 style={{color:"#36c940"}}>Dr Kanika Verma</h4></li>      
                 <li><span>15 Years Experience</span></li>
                 <li><span className='fw-bold'>Hyderabad , Virtual Consulation</span></li>
                 <li> <span>IBS, Hormonal Balance, Panchkarma, <br /> Ayurveda Diet, Reproductive Health, Cancer Healing</span></li>
                </ul>
                <hr />
             </div>
          </div>
           <div className="booking_btn">
             <div className="calender_logo">
              <i class="bi bi-calendar-event"></i>
              <span className='ms-2'>Available Tomorrow</span>
             </div>
            <button className='mt-2'>Booking Appointment
              <div>
              <small>No booking fee</small>

              </div>
            </button>
           </div>
         </div>
       </div>
    </section> */}
    <section style={{padding:"0 6rem"}}>
      <div className="experts">
        <div className="row mt-5">
          <div className="col-lg-10 col-md-12 col-sm-12">
            <input type="search" name="" id="" className='form-control' placeholder='Enter Speciality Name (e.g. Dietitian, Dermatologist, Psychologist)'/>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <button className='btn btn-success col-12'>Search</button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-2">
           <div className="filter border p-4">
              <div className="modes">
                <p>MODE OF CONSULT</p>
                <div className="options_check">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                      Text
                     </label>
                    </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                      Audio
                     </label>
                    </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                      Video
                     </label>
                    </div>
                  </div>
              </div>
              <div className="consult_fee">
                <p>Consult fee</p>
                <div className="price-slider">
                <input type="range" class="form-range" min="0" max="1000" id="customRange2"/>
               </div>
              </div>
              <div className="gender">
               <p>GENDER</p>
               <div class="form-check">
                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Any
                   </label>
                </div>
               <div class="form-check">
                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Male
                   </label>
                </div>
               <div class="form-check">
                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">
                    female
                   </label>
                </div>
              </div>
           </div>

          </div>
          
          <div className="col-lg-8">

            <div className="doctor_cards border p-3">

            <div className="doctor_info d-flex">
            <NavLink to={"/details"}>
              <img src={doctor1} alt="" height={"130px"}/>
              </NavLink>
               <div className="rating">
                <span></span>
               </div>
              <div className="info">
                <ul>
                    <li><h5>Dr.Priyanka Gupta</h5></li> 
                  <li>Dermatologist.16 Exp.</li>
                  <li>MBBS, MD Dermatology, Venereology & Leprosy, Cosmetologist</li>
                  <li><i class="bi bi-translate"></i><span>Hindi ,English</span> </li>
                  <li><i class="bi bi-geo-alt"></i> <span>Hyderabad</span></li>
                </ul>
              </div>
            </div>
            <div className="consult_btns d-flex gap-3 justify-content-center">
              <button className='btn btn-outline-danger'>Text Consult</button>
              <button className='btn btn-outline-success'>Audio Consult</button>
              <button className='btn btn-outline-primary'>Video Consult</button>
            </div>
            </div>
          

            <div className="doctor_cards border p-3">

            <div className="doctor_info d-flex">
            <NavLink to={"/details"}>
              <img src={doctor2} alt="" height={"130px"}/>
            </NavLink>
              <div className="info">
                <ul>
                    <li><h5>Dr.Priyanka Gupta</h5></li> 
                  <li>Dermatologist.16 Exp.</li>
                  <li>MBBS, MD Dermatology, Venereology & Leprosy, Cosmetologist</li>
                  <li><i class="bi bi-translate"></i><span>Hindi ,English</span> </li>
                  <li><i class="bi bi-geo-alt"></i> <span>Hyderabad</span></li>
                </ul>
              </div>
            </div>
            <div className="consult_btns d-flex gap-3 justify-content-center">
              <button className='btn btn-outline-danger'>Text Consult</button>
              <button className='btn btn-outline-success'>Audio Consult</button>
              <button className='btn btn-outline-primary'>Video Consult</button>
            </div>
            </div>
            <div className="doctor_cards border p-3">

            <div className="doctor_info d-flex">
              <img src={doctor3} alt="" height={"130px"}/>
              <div className="info">
                <ul>
                    <li><h5>Dr.Priyanka Gupta</h5></li> 
                  <li>Dermatologist.16 Exp.</li>
                  <li>MBBS, MD Dermatology, Venereology & Leprosy, Cosmetologist</li>
                  <li><i class="bi bi-translate"></i><span>Hindi ,English</span> </li>
                  <li><i class="bi bi-geo-alt"></i> <span>Hyderabad</span></li>
                </ul>
              </div>
            </div>
            <div className="consult_btns d-flex gap-3 justify-content-center">
              <button className='btn btn-outline-danger'>Text Consult</button>
              <button className='btn btn-outline-success'>Audio Consult</button>
              <button className='btn btn-outline-primary'>Video Consult</button>
            </div>
            </div>
            <div className="doctor_cards border p-3">

            <div className="doctor_info d-flex">
              <img src={doctor4} alt="" height={"130px"}/>
              <div className="info">
                <ul>
                    <li><h5>Dr.Priyanka Gupta</h5></li> 
                  <li>Dermatologist.16 Exp.</li>
                  <li>MBBS, MD Dermatology, Venereology & Leprosy, Cosmetologist</li>
                  <li><i class="bi bi-translate"></i><span>Hindi ,English</span> </li>
                  <li><i class="bi bi-geo-alt"></i> <span>Hyderabad</span></li>
                </ul>
              </div>
            </div>
            <div className="consult_btns d-flex gap-3 justify-content-center">
              <button className='btn btn-outline-danger'>Text Consult</button>
              <button className='btn btn-outline-success'>Audio Consult</button>
              <button className='btn btn-outline-primary'>Video Consult</button>
            </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="ask_q_box">
              <h5>Ask a free question</h5>
              <small>Get FREE multiple opinions from Doctors</small>
              <textarea name="" id="" rows="4" className='form-control' placeholder='Enter question for you or someone else. E.g. my left eye is red and swollen...'></textarea>
              <button className='btn btn-success mt-2'>Submit</button>
            </div>
            <div className="related_tips mt-4">
              <h5>RELATED HEALTH TIPS</h5>
              <p><a href="">Voice Disorders - Signs You Are Suffering From It!</a></p>
              <p><a href="">Change In Voice - What Can Cause It?</a></p>
              <p><a href="">Audiologist - Why To Visit One?</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

)
}

export default MeetExport

    
