import React from 'react'
import { Link } from "react-router-dom";


const Gallery = () => {
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
                                        <p>Partner with Us <span><i class="fas fa-angle-right"></i></span></p>
                                    </div>
                                    <h1>Partner with Us</h1>
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

            <section className='all_images'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-4 col-md-4">
                            <div className="gallery_wrap">
                                <div className="bg_gallery bg_gallery1">
                                    <div className="gallery_overlay"></div>
                                    <div className="search_icon d-flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-4">
                            <div className="gallery_wrap">
                                <div className="bg_gallery bg_gallery2">
                                    <div className="gallery_overlay"></div>
                                    <div className="search_icon d-flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-4">
                            <div className="gallery_wrap">
                                <div className="bg_gallery bg_gallery3">
                                    <div className="gallery_overlay"></div>
                                    <div className="search_icon d-flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-4">
                            <div className="gallery_wrap">
                                <div className="bg_gallery bg_gallery4">
                                    <div className="gallery_overlay"></div>
                                    <div className="search_icon d-flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-4">
                            <div className="gallery_wrap">
                                <div className="bg_gallery bg_gallery5">
                                    <div className="gallery_overlay"></div>
                                    <div className="search_icon d-flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-4">
                            <div className="gallery_wrap">
                                <div className="bg_gallery bg_gallery6">
                                    <div className="gallery_overlay"></div>
                                    <div className="search_icon d-flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-4">
                            <div className="gallery_wrap">
                                <div className="bg_gallery bg_gallery7">
                                    <div className="gallery_overlay"></div>
                                    <div className="search_icon d-flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-4">
                            <div className="gallery_wrap">
                                <div className="bg_gallery bg_gallery8">
                                    <div className="gallery_overlay"></div>
                                    <div className="search_icon d-flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-4 col-md-4">
                            <div className="gallery_wrap">
                                <div className="bg_gallery bg_gallery9">
                                    <div className="gallery_overlay"></div>
                                    <div className="search_icon d-flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

     
        </>
    )
}

export default Gallery
