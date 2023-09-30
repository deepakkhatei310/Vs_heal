import React from 'react'
import { Link } from "react-router-dom";

const Blog = () => {

    const truncateText = (text, limit) => {
        if (text.length <= limit) {
          return text;
        }
        return text.substring(0, limit) + '...';
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
                                        <p>Blog <span><i class="fas fa-angle-right"></i></span></p>
                                    </div>
                                    <h1>Blog</h1>
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

            <section className='ftco_section ftco_section2'>
                <div className="container-xl">
                    <div className="ftco_main_content">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="blog_entry blog_entr2">
                                    <div className="blog_img blog_img1">
                                    </div>
                                    <div className="blog_text">
                                        <div class="meta mb-3"><span>January 30, 2022</span> <span>Admin </span> <span><Link to="/"><i class="fas fa-comment"></i> 3 </Link></span>
                                        </div>
                                        <h3 className='mb-3'><Link to="https://altheal.in/age-digestion-how-does-age-affect-digestion%ef%bf%bc/">{truncateText("Age & Digestion: How Does Age Affect Digestion?￼", 20)}</Link></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="blog_entry blog_entr2">
                                    <div className="blog_img blog_img2">
                                    </div>
                                    <div className="blog_text">
                                        <div class="meta mb-3"><span>January 30, 2021</span> <span>Admin </span> <span><Link to="/"><i class="fas fa-comment"></i> 3 </Link></span></div>
                                        <h3 className='mb-3'><Link to="https://altheal.in/we-help-you-manage-your-thyroid-naturally-holistically-without-hormonal-drugs/">{truncateText("We Help You Manage Your Thyroid Naturally & Holistically Without Hormonal Drugs", 20)}</Link></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="blog_entry blog_entr2">
                                    <div className="blog_img blog_img3">
                                    </div>
                                    <div className="blog_text">
                                        <div class="meta mb-3"><span>January 30, 2021</span> <span>Admin </span> <span><Link to="/"><i class="fas fa-comment"></i> 3 </Link></span></div>
                                        <h3 className='mb-3'><Link to="https://altheal.in/with-our-holistic-approach-to-pcos-we-offer-natural-drug-free-treatments/">{truncateText("With Our Holistic Approach To PCOS, We Offer Natural & Drug-free Treatments", 20)}</Link></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="blog_entry blog_entr2">
                                    <div className="blog_img blog_img4">
                                    </div>
                                    <div className="blog_text">
                                        <div class="meta mb-3"><span>January 30, 2021</span> <span>Admin </span> <span><Link to="/"><i class="fas fa-comment"></i> 3 </Link></span></div>
                                        <h3 className='mb-3'><Link to="https://altheal.in/fitness-coaching-packages-by-ctrlaltheal-get-started-succeed-in-the-fitness-journey/">{truncateText("Fitness Coaching Packages by CtrlAltHeal: Get Started & Succeed In the Fitness Journey", 20)}</Link></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="blog_entry blog_entr2">
                                    <div className="blog_img blog_img5">
                                    </div>
                                    <div className="blog_text">
                                        <div class="meta mb-3"><span>January 30, 2021</span> <span>Admin </span> <span><Link to="https://altheal.in/time-to-undo-the-lung-damage-caused-by-covid-19/"><i class="fas fa-comment"></i> 3 </Link></span></div>
                                        <h3 className='mb-3'><Link to="https://altheal.in/time-to-undo-the-lung-damage-caused-by-covid-19/">{truncateText("Time To Undo The Lung Damage Caused By Covid-19", 20)}</Link></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="blog_entry blog_entr2">
                                    <div className="blog_img blog_img6">
                                    </div>
                                    <div className="blog_text">
                                        <div class="meta mb-3"><span>January 30, 2021</span> <span>Admin </span> <span><Link to="/"><i class="fas fa-comment"></i> 3 </Link></span></div>
                                        <h3 className='mb-3'><Link to="https://altheal.in/worried-about-weight-gain-or-loss-weight-management-sessions-is-the-solution/">{truncateText("Worried About Weight Gain or Loss? Weight Management Sessions is the Solution", 20)}</Link></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="b-pagination-outer">
                        <ul id="border-pagination">
                            <li><Link className="" href="/">«</Link></li>
                            <li><Link href="/" class="active">1</Link></li>
                            <li><Link href="/">2</Link></li>
                            <li><Link href="/">3</Link></li>
                            <li><Link href="/">4</Link></li>
                            <li><Link href="/">5</Link></li>
                            <li><Link href="/">»</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
