import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();



    const navigateToAbout = () => {
        navigate("/");
        setTimeout(() => {
            const aboutSection = document.getElementById("about_us");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light pt-3">
                <div className="container-fluid">
                    <div className="nav_logo ">
                        <Link className="navbar-brand" to="/">VITA<span>SANA</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse nav-right" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" aria-current="page" to="/">{props.home}</NavLink>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link text-light" aria-current="page"  onClick={navigateToAbout}>{props.about}</div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" aria-current="page" to="/shop-online">Market Place</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.services}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/market-export">Meet the Expert</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/wellness-program">Wellness Program</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/goal-setting">Goal Setting</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/fitness">Fitness</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/nutrition">Nutrition</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/panchkarma">Panchkarma</NavLink></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link text-light dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.product}
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href='https://health-assessment-form-system.netlify.app' target='_blank' >Health Assesment system</a></li>
                                    <li><a className="dropdown-item" href='https://op-assessment-form.netlify.app/' target='_blank'>Op Assesment system</a></li>
                                    <li><a className="dropdown-item" >Health score </a></li>
                                    <li><a className="dropdown-item" >Dosha Questionairee System</a></li>
                                    <li><a className="dropdown-item" >BMI and BMR Calculator </a></li>
                                    <li><a className="dropdown-item" >Diet Assessment Tool</a></li>
                                    <li><a className="dropdown-item" >Fitness Assessment Calculator</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" aria-current="page" to="/gallery">{props.gallery}</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/blog">{props.blog}</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link text-light"  aria-current="page" id='contactUsNav' to="/contact">{props.contact}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" aria-current="page" to="/signup">{props.signup}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
