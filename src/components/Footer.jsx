import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='service_footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-xl-3 col-md-6">
                            <div className='footer_widget mb-4'>
                                <div className='ftco_heading' style={{marginLeft:"5px"}}>
                                    <h2><span class="footer_logo_left">VITA</span> <span>SANA</span></h2>
                                </div>
                                {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}
                                <ul className='footer_social d-flex align-items-center'>
                                    <li><a href='tel:+916301889254' target='_blank' rel="noreferrer" ><i class="bi bi-telephone"></i></a></li>
                                    <li><a href='https://api.whatsapp.com/send?phone=6301889254' target='_blank' rel="noreferrer" ><i class="bi bi-whatsapp"></i></a></li>
                                    <li><a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank' rel="noreferrer" ><i class="bi bi-envelope"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 col-xl-4'>
                            <div className='footer_widget mb-4'>
                                <div className="ftco_heading">
                                    <h2>Services</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='ftco_footer_widget mb-4'>
                                            <ul className='list_unstyled'>
                                                <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Weight Loss Program</Link></li>
                                                <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Sport Nutritionists</Link></li>
                                                <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Personal Nutrition</Link></li>
                                                <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Individual Coaching</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='ftco_footer_widget mb-4'>
                                            <ul className="list_unstyled">
                                                <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Child Nutrition</Link></li>
                                                <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Workout Routines</Link></li>
                                                <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Poor Eating Habits</Link></li>
                                                <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Balance Body & Mind</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-2 col-xl-2'>
                            <div className='footer_widget mb-4'>
                                <div className='ftco_heading'>
                                    <h2>Quick Links</h2>
                                </div>
                                <ul className="list_unstyled">
                                    <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Home</Link></li>
                                    <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>About</Link></li>
                                    <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Services</Link></li>
                                    <li><Link to="/"><span><i class="fas fa-chevron-right"></i></span>Gallery & Bar</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3 col-xl-3'>
                            <div className='footer_widget mb-4'>
                                <div className="ftco_heading">

                                </div>
                                <div className="block_list">
                                    <div className='ftco_heading'>
                                        <h2>Have a Questions?</h2>

                                    </div>
                                    <ul className='lastlist_unstyled'>
                                        <li><Link to="/"><span class="footer_icons"><i class="icon fa fa-map marker"></i></span>1st floor, RENT A DESK - Mind Space
                                            Plot # 37 & 38, Serinity Square,
                                            Madhapur, Hyderabad, Telangana 500081</Link></li>
                                        <li><Link to="/"><span class="footer_icons"><i class="fa fa-phone"></i></span>+916301889254</Link></li>
                                        <li><Link to="/"><span class="footer_icons"><i class="icon fa fa-paper-plane pr-4"></i></span>info@vsheal.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="copyright px-0 py-5 bg-darken">
                <div className="container"> */}
                    {/* <p className='text-center'>A brand of Heal and Live Pvt Ltd
                        Copyright 2022
                        FSSAI <span>License No</span> – 13621999000310</p> */}
                {/* </div>
            </div> */}
        </>
    )
}

export default Footer
