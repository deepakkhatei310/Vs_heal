import React from 'react'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const About = (props) => {

    // const bannerimage = {
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

    const responsives = {
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
    return (
        <>
            <section className='main_content'>
                <div>
                    <div className="item">
                        <div className="aboutbanner_img banner_img1" >
                            <div className="banner_overlay"></div>
                            <div className="banner_about">
                                <div className="about_head mt-5">
                                    <div className="breadcrumbs mb-3">
                                        <Link to="/">Home <span><i class="fas fa-angle-right"></i></span></Link>
                                        <p>About Us <span><i class="fas fa-angle-right"></i></span></p>
                                    </div>
                                    <h1>About Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="item">
                        <div className="banner_img banner_img2" >
                            <div className="overlay"></div>
                            <div className="banner_about">
                                <div className="about_head">
                                    <div className="breadcrumbs mb-3">
                                        <Link to="/">Home <span><i class="fas fa-angle-right"></i></span></Link>
                                        <p>About Us <span><i class="fas fa-angle-right"></i></span></p>
                                    </div>
                                    <h1>About Us</h1>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="item">
                        <div className="banner_img banner_img3" >
                            <div className="overlay"></div>
                            <div className="banner_about">
                                <div className="about_head">
                                    <div className="breadcrumbs mb-3">
                                        <Link to="/">Home <span><i class="fas fa-angle-right"></i></span></Link>
                                        <p>About Us <span><i class="fas fa-angle-right"></i></span></p>
                                    </div>
                                    <h1>About Us</h1>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            <section className='about_us about_us2'>
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

            <section className='team_section'>
                <div className="container">
                    <div className="team_sec_head text-center">
                        <h5 className='head_title'>Team</h5>
                        <h2 className='head_subtitle mb-4'>Health Coach</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-xl-3 col-md-6">
                            <div className="team_wrap">
                                <div className="team_bgimg team_bgimg1">
                                    <ul className='social_icons'>
                                        <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-instagram"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team_text">
                                    <h3>Dr Priyanka Gupta</h3>
                                    <p>MD, BAMS, Co-Founder and Chief Mentor</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xl-3 col-md-6">
                            <div className="team_wrap">
                                <div className="team_bgimg team_bgimg2">
                                    <ul className='social_icons'>
                                        <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-instagram"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team_text">
                                    <h3>Dr Priyanka Gupta</h3>
                                    <p>MD, BAMS, Co-Founder and Chief Mentor</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xl-3 col-md-6">
                            <div className="team_wrap">
                                <div className="team_bgimg team_bgimg3">
                                    <ul className='social_icons'>
                                        <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-instagram"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team_text">
                                    <h3>Dr Priyanka Gupta</h3>
                                    <p>MD, BAMS, Co-Founder and Chief Mentor</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xl-3 col-md-6">
                            <div className="team_wrap">
                                <div className="team_bgimg team_bgimg4">
                                    <ul className='social_icons'>
                                        <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-instagram"></i></Link></li>
                                        <li><Link to="/"><i class="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team_text">
                                    <h3>Dr Priyanka Gupta</h3>
                                    <p>MD, BAMS, Co-Founder and Chief Mentor</p>
                                </div>
                            </div>
                        </div>
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
                        <h5 className='head_title'>Procedure</h5>
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
                                        <h2>Trusted Services</h2>
                                        <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
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
                                        <h2>Trusted Services</h2>
                                        <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
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
                                        <h2>Trusted Services</h2>
                                        <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
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
                                        <h2>Trusted Services</h2>
                                        <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
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
                            <div className="video_button text-center">
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
                                <Link href="/" className='btn btn-white p-4 py-3'>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='success_section'>
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
            </section>
           
        </>
    )
}

export default About
