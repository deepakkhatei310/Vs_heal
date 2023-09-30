import React from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const Home = () => {

  

    // const recipientEmail = 'info@altheal.com';
  


    const bannerimage = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    // const responsives = {
    //     superLargeDesktop: {
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5,
    //         slidesToSlide: 1
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 1,
    //         slidesToSlide: 1
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 1,
    //         slidesToSlide: 1
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1
    //     }
    // };

    return (
        <>
            <section className='main_content'>
                <Carousel responsive={bannerimage}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    arrows={true}
                    infinite={true}
                    itemClass="carousel-item-padding-40-px"
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    transitionDuration={1000} infiniteLoop={true}>
                    <div className="item">
                        <div className="banner_img banner_img1" >
                            <div className="overlay"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="banner_img banner_img2" >
                            <div className="overlay"></div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="banner_img banner_img3" >
                            <div className="overlay"></div>
                            {/* <div className="banner_text">
                                <div className="container">
                                    <p>FINDING BALANCE IN FOOD, HEALTH AND WELLNESS</p>
                                    <h1 className='mb-4'>Eat Mindfully, <br />
                                        Sweat Often & Self Love Always</h1>
                                    <div className="buttons d-flex">
                                        <Link to="/" className='btn btn-success p-4 py-3'>Contact Us</Link>
                                        <Link to="/" className='btn btn-white p-4 py-3'>Learn More</Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Carousel>
                <div className="banner_text">
                    <div className="container">
                        <p>Enabling Integrative Health and Wellness</p>
                        <h1 className='mb-4'>Unleash A Better You By Mind, Body and Energy</h1>
                        <div className="buttons d-flex">
                            <Link to="/contact" className='btn btn-success p-4 py-3'>Talk to Expert <span><i class="fas fa-arrow-right"></i></span></Link>
                            <Link to="/" className='btn btn-white p-4 py-3'>Become a Member <i class="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cards">
                <div className="container">
                    <div className="main_card">
                        <Link className='card_content' to="/market-export">
                            <div className="icon icon1"></div>
                            <div className="card_text">
                                <h2>Meet the Expert</h2>
                                <p>Discover Experts Who Understand Your Medical History and Preferences.</p>
                            </div>
                        </Link>

                        <Link className='card_content' to="/goal-setting">
                            <div className="icon icon3"></div>
                            <div className="card_text">
                                <h2>Goal Setting</h2>
                                <p>Achieve Wellness Through Focused Goal Setting.</p>
                            </div>
                        </Link>

                        <Link className='card_content' to="/fitness">
                            <div className="icon icon4"></div>
                            <div className="card_text">
                                <h2>Fitness</h2>
                                <p>Elevate Your Journey with Our Comprehensive Approach.</p>
                            </div>
                        </Link>

                        <Link className='card_content' to="/nutrition">
                            <div className="icon icon5"></div>
                            <div className="card_text">
                                <h2>Nutrition</h2>
                                <p>Experience Holistic Wellness Crafted for Your Improved Health.</p>
                            </div>
                        </Link>

                        <Link className='card_content' to="/panchkarma">
                            <div className="icon icon6"></div>
                            <div className="card_text">
                                <h2>Panchkarma</h2>
                                <p>Rejuvenate with Ancient Ayurvedic Detoxification Therapy.</p>
                            </div>
                        </Link>
                    </div>


                </div>
            </section>

            <section className='about_us' id='about_us'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about_img">
                                <div className='counter-wrap d-flex'>
                                    <div className="counter_icon">
                                        <i class="fas fa-clipboard"></i>
                                    </div>
                                    <div className="counter_text">
                                        <h3>24</h3>
                                        <p>Years of experienced</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about_text">
                                <h5 className='mt-5 mt-md-0 head_title'>About Us</h5>
                                <h2 className='mb-2 head_subtitle'>Better Eat, Better Life</h2>
                                <h3 className='mb-4'>If You Get A Better Nutrition, You Can Enjoy A Healthy Age</h3>
                                <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <h4>We Can Help You</h4>
                                <div className="about_list d-flex">
                                    <ul>
                                        <li><span><i class="fas fa-check"></i></span>Low Energy</li>
                                        <li><span><i class="fas fa-check"></i></span>Stress & Anxiety</li>
                                        <li><span><i class="fas fa-check"></i></span>Poor Eating Habits</li>
                                        <li><span><i class="fas fa-check"></i></span>Digestive Problems</li>
                                    </ul>
                                    <ul>
                                        <li><span><i class="fas fa-check"></i></span>Balance Body & Mind</li>
                                        <li><span><i class="fas fa-check"></i></span>Advice</li>
                                        <li><span><i class="fas fa-check"></i></span>Workout Routines</li>
                                        <li><span><i class="fas fa-check"></i></span>Protein</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='services'>
                <div className="container">
                    <div className="services_title text-center">
                        <h5 className='head_title'>What We Do</h5>
                        <h2 className='head_subtitle mb-4'>Services</h2>
                    </div>
                    <div className="row">
                        <Carousel responsive={responsive} swipeable={true}
                            draggable={true}
                            showDots={true} arrows={false} itemClass="carousel-item-padding-40-px" autoPlaySpeed={1000} transitionDuration={500} infinite={true} infiniteLoop={true}>
                            <div className="item">
                                <div className="service_card">
                                    <div className="bg_service_img service_img1">
                                    </div>
                                    <div className="service_text">
                                        <h2>Weight Loss Program</h2>
                                        <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind.</p>
                                         <div className="contact_icons">
                                         <span><a href="tel:+916301889254" target='_blank'  rel='noreferrer'><i class="bi bi-telephone"></i></a></span>
                                           <span className='whatsapp'><a href="https://api.whatsapp.com/send?phone=6301889254" target='_blank'  rel='noreferrer'><i class="bi bi-whatsapp"></i></a></span>
                                           <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'  rel='noreferrer'><i class="bi bi-envelope"></i></a></span>
                                         </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="service_card">
                                    <div className="bg_service_img service_img2">
                                    </div>
                                    <div className="service_text">
                                        <h2>Hormonal Imbalance</h2>
                                        <p className='mb-4'>Hormonal imbalance disrupts body equilibrium, causing issues like mood swings, irregular cycles, and energy fluctuations.</p>
                                        <div className="contact_icons">
                                        <span><a href="tel:+916301889254" target='_blank'  rel='noreferrer'><i class="bi bi-telephone"></i></a></span>
                                           <span className='whatsapp'><a href="https://api.whatsapp.com/send?phone=6301889254" target='_blank'  rel='noreferrer'><i class="bi bi-whatsapp"></i></a></span>
                                           <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'  rel='noreferrer'><i class="bi bi-envelope"></i></a></span>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service_card">
                                    <div className="bg_service_img service_img3">
                                    </div>
                                    <div className="service_text">
                                        <h2>Pregnancy Care Program</h2>
                                        <p className='mb-4'>Our Pregnancy Care Program ensures comprehensive support for your health and well-being throughout your pregnancy.</p>
                                        <div className="contact_icons">
                                        <span> <a href="tel:+916301889254" target='_blank'  rel='noreferrer'><i class="bi bi-telephone"></i></a></span>
                                           <span className='whatsapp'> <a href="https://api.whatsapp.com/send?phone=6301889254" target='_blank'  rel='noreferrer'><i class="bi bi-whatsapp"></i></a> </span>
                                           <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'  rel='noreferrer'><i class="bi bi-envelope"></i></a></span>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service_card">
                                    <div className="bg_service_img service_img4">
                                    </div>
                                    <div className="service_text">
                                        <h2>Immunity Booster Program</h2>
                                        <p className='mb-4'>Our Immunity Booster enhances body defenses, fortifying health against illnesses. Strengthen your immunity for a resilient life.</p>
                                        <div className="contact_icons">
                                        <span><a href="tel:+916301889254" target='_blank'  rel='noreferrer'><i class="bi bi-telephone"></i></a></span>
                                           <span className='whatsapp'><a href="https://api.whatsapp.com/send?phone=6301889254" target='_blank'  rel='noreferrer'><i class="bi bi-whatsapp"></i></a></span>
                                           <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'  rel='noreferrer'><i class="bi bi-envelope"></i></a></span>
                                         </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="service_card">
                                    <div className="bg_service_img service_img5">
                                    </div>
                                    <div className="service_text">
                                        <h2>Healthy heart Program</h2>
                                        <p className='mb-4'>Explore the synergy of Healthy Heart and Yoga. Nourish cardiovascular wellness with holistic practices and mindful living.</p>
                                        <div className="contact_icons">
                                        <span><a href="tel:+916301889254" target='_blank'  rel='noreferrer'><i class="bi bi-telephone"></i></a></span>
                                           <span className='whatsapp'><a href="https://api.whatsapp.com/send?phone=6301889254" target='_blank'  rel='noreferrer'><i class="bi bi-whatsapp"></i></a></span>
                                           <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'  rel='noreferrer'><i class="bi bi-envelope"></i></a></span>
                                         </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="service_card">
                                    <div className="bg_service_img service_img6">
                                    </div>
                                    <div className="service_text">
                                        <h2>Yoga Program</h2>
                                        <p className='mb-4'>Unveil the balance between a Healthy Heart and Yoga. Cultivate heart health through yoga's mindful techniques and lifestyle.</p>
                                        <div className="contact_icons">
                                        <span><a href="tel:+916301889254" target='_blank'  rel='noreferrer'><i class="bi bi-telephone"></i></a></span>
                                           <span className='whatsapp'><a href="https://api.whatsapp.com/send?phone=6301889254" target='_blank' rel='noreferrer'><i class="bi bi-whatsapp"></i></a></span>
                                           <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'  rel='noreferrer'><i class="bi bi-envelope"></i></a></span>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>

            <section className='instruction_section'>
                <div className="bg_instruction">
                    <div className="overlay_two"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="instruction_head">
                                    <h5 className='head_title'>FINDING BALANCE IN FOOD, HEALTH AND WELLNESS</h5>
                                    <h2 className='head_subtitle'>Get Health and Instruction Coach</h2>
                                </div>
                            </div>
                            <div className="col-xl-4 g-3">
                                <div className="appointment_btn">
                                    <Link to="/" className='btn'>Make An Appointment</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='procedure_section'>
                <div className="container">
                    <div className="procedure_title text-center mb-5">
                        {/* <h5 className='head_title'>Procedure</h5> */}
                        <h2 className='head_subtitle'>How It Works?</h2>
                    </div>
                    <div className="procedure_content">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="procedure_service text-center">
                                    <div className="procedure_bgimg procedure_bgimg1">
                                        <div className="number">
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div className="procedure_text">
                                        <h2>Assessment</h2>
                                        <p className='mb-4'>Health assessment by the experienced Health Experts, diagnosis of body and mind.</p>
                                        <Link to="/" className='btn'>Learn More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3">
                                <div className="procedure_service text-center">
                                    <div className="procedure_bgimg procedure_bgimg2">
                                        <div className="number">
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div className="procedure_text">
                                        <h2>Personalized Plan</h2>
                                        <p className='mb-4'>Set the realistic goals and create a preventive and curative and care plan for you.</p>
                                        <Link to="/" className='btn'>Learn More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3">
                                <div className="procedure_service text-center">
                                    <div className="procedure_bgimg procedure_bgimg3">
                                        <div className="number">
                                            <span>3</span>
                                        </div>
                                    </div>
                                    <div className="procedure_text">
                                        <h2>Outcome</h2>
                                        <p className='mb-4'>Periodic outcome assessment, 90 days health screening and progress reports.</p>
                                        <Link to="/" className='btn'>Learn More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3">
                                <div className="procedure_service text-center">
                                    <div className="procedure_bgimg procedure_bgimg4">
                                        <div className="number">
                                            <span>4</span>
                                        </div>
                                    </div>
                                    <div className="procedure_text">
                                        <h2>Evaluation</h2>
                                        <p className='mb-4'>Diagnosis to evaluate the health care improvement and then consult the doctor.</p>
                                        <Link to="/" className='btn'>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='vid-section'>
                <div className="vid_bgimg">
                    <div className="overlay_three"></div>
                    <div className="container">
                        <div className="video_wrap text-center">
                            <div className="video_button text-center d-none">
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i class="fas fa-play"></i>
                                </button>

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/u31qwQUeGuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5>Finding Balance In Food, Health And Wellness</h5>
                            <h3 className='mt-3'>Start Your Body Changing With Healthy Nutrition</h3>
                            <div className="vid_buttons">
                                <Link href="/" className='btn btn-success p-4 py-3 me-1'>Get Started</Link>
                                <Link href="/" className='btn btn-white p-4 py-3'>Contact US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='success_section'>
                <div className="container">
                    <div className="success_sec_title text-center mb-4">
                        <h5 className='head_title'>Testimonial</h5>
                        <h2 className='head_subtitle'>Successful Stories</h2>
                    </div>
                    <div className="carousel_testimony">
                        <div className="row">
                            <Carousel responsive={responsives} swipeable={true}
                                draggable={true}
                                showDots={false} arrows={true} itemClass="carousel-item-padding-40-px" autoPlaySpeed={1000} transitionDuration={500}>
                                <div className="item">
                                    <div className="testimony_card">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="testimony_img testimony_img1">
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 d-flex align-items-center justify-content-center">
                                                <div className="testimony_text">
                                                    <div className="profiles d-flex align-items-center mb-4">
                                                        <div className="user_img user_img1">
                                                            <div className="quote_icon d-flex align-items-center justify-content-center">
                                                                <i class="fas fa-quote-left"></i>
                                                            </div>
                                                        </div>
                                                        <div className="user_details ps-3">
                                                            <h3 className='pb-3'>Nicole Scott</h3>
                                                            <h5>MARKETING MANAGER</h5>
                                                        </div>
                                                    </div>
                                                    <p className='user_para mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="testimony_card">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="testimony_img testimony_img2">
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 d-flex align-items-center justify-content-center">
                                                <div className="testimony_text">
                                                    <div className="profiles d-flex align-items-center mb-4">
                                                        <div className="user_img user_img2">
                                                            <div className="quote_icon d-flex align-items-center justify-content-center">
                                                                <i class="fas fa-quote-left"></i>
                                                            </div>
                                                        </div>
                                                        <div className="user_details ps-3">
                                                            <h3 className='pb-3'>Nicole Scott</h3>
                                                            <h5>MARKETING MANAGER</h5>
                                                        </div>
                                                    </div>
                                                    <p className='user_para mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="testimony_card">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="testimony_img testimony_img3">
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 d-flex align-items-center justify-content-center">
                                                <div className="testimony_text">
                                                    <div className="profiles d-flex align-items-center mb-4">
                                                        <div className="user_img user_img3">
                                                            <div className="quote_icon d-flex align-items-center justify-content-center">
                                                                <i class="fas fa-quote-left"></i>
                                                            </div>
                                                        </div>
                                                        <div className="user_details ps-3">
                                                            <h3 className='pb-3'>Nicole Scott</h3>
                                                            <h5>MARKETING MANAGER</h5>
                                                        </div>
                                                    </div>
                                                    <p className='user_para mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className='ftco_section'>
                <div className="container-xl">
                    <div className="ftco_sec_title text-center mb-5">
                        <h5 className='head_title'>Our Blog</h5>
                        <h2 className='head_subtitle'>Recent Blog</h2>
                    </div>
                    <div className="ftco_main_content">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="blog_entry">
                                    <div className="blog_img blog_img1">
                                    </div>
                                    <div className="blog_text">
                                        <div class="meta mb-3"><span>January 30</span> <span>Admin </span> <span><Link to="/"><i class="fas fa-comment"></i> 3 </Link></span>
                                        </div>
                                        
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="blog_entry">
                                    <div className="blog_img blog_img2">
                                    </div>
                                    <div className="blog_text">
                                        <div class="meta mb-3"><span>January 30</span> <span>Admin </span> <span><Link to="/"><i class="fas fa-comment"></i> 3 </Link></span></div>
                            
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="blog_entry">
                                    <div className="blog_img blog_img3">
                                    </div>
                                    <div className="blog_text">
                                        <div class="meta mb-3"><span>January 30</span> <span>Admin </span> <span><Link to="/"><i class="fas fa-comment"></i> 3 </Link></span></div>
                                      
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



            <section className='appointment_section' id='appointment_section'>
                <div className="overlay_four"></div>
                <div className="appointment_content">
                    <div className="container-xl">
                        <div className='row g-lg-5'>
                            <div className="col-md-6 col-xl-6 col-lg-6 d-flex align-items-center">
                                <form action="" className='appointment_form'>
                                    <span>DROP A MESSAGE</span>
                                    <h2 className='mb-4'>Contact Us</h2>
                                    <div className="row">
                                        <div className='col-md-12 col-lg-6'>
                                            <div class="form-group">
                                                <label for="name">Your Full Name</label>
                                                <input type="text" class="form-control" placeholder="Your Full Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-6">
                                            <div class="form-group">
                                                <label for="email">Email Address</label>
                                                <input type="text" class="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="subject">Select Subject</label>
                                                <div class="form-field">
                                                    <div class="select-wrap">
                                                        <select name="" id="" class="form-control">
                                                            <option value="">Weight Loss Program</option>
                                                            <option value="">Individual Coaching</option>
                                                            <option value="">Workout Routines</option>
                                                            <option value="">Sport Nutriotionists</option>
                                                            <option value="">Child Nutrition</option>
                                                            <option value="">Personal Nutrition</option>
                                                            <option value="">Other</option>
                                                        </select>
                                                        <div class="icon"><span><i class="fas fa-chevron-down"></i></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group text_message">
                                                <label for="name">Message</label>
                                                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 form_btn">
                                            <button type="submit" value="Send message" class="btn btn-primary py-3 px-4 rounded">Send message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='col-md-6 col-xl-6 col-lg-6 d-flex align-items-center order-lg-last pl-lg-5'>
                                <div className="appointment_head_section">
                                    <span>Who We Are</span>
                                    <h2>We Best Nutrition</h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <div className='row mt-md-5'>
                                        <div className='services-3 d-flex w-100'>
                                            <div className="bg_nutrienticon">
                                                <div className="nutrition_icon nutrition_icon1">
                                                </div>
                                            </div>
                                            <div className='nutrition_text ps-4'>
                                                <h2>Full Services</h2>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                                            </div>
                                        </div>
                                        <div className='services-3 d-flex w-100'>
                                            <div className="bg_nutrienticon">
                                                <div className="nutrition_icon nutrition_icon2">
                                                </div>
                                            </div>
                                            <div className='nutrition_text ps-4'>
                                                <h2>Good Products</h2>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                                            </div>
                                        </div>
                                        <div className='services-3 d-flex w-100'>
                                            <div className="bg_nutrienticon">
                                                <div className="nutrition_icon nutrition_icon3">
                                                </div>
                                            </div>
                                            <div className='nutrition_text ps-4'>
                                                <h2>Natural & Healthy Foods</h2>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
