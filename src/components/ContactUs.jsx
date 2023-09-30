import React, { useState } from 'react';
import { Link } from 'react-router-dom'



const ContactUs = () => {

	const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mob_num: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset previous errors
        setErrors({});

        // Perform validation
        let isValid = true;
        const newErrors = {};

        if (formData.fname.trim() === '') {
            newErrors.fname = 'First Name is required';
            isValid = false;
        }
        if (formData.lname.trim() === '') {
            newErrors.lname = 'Last Name is required';
            isValid = false;
        }
        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
            isValid = false;
        }
        if (formData.mob_num.trim() === '') {
            newErrors.mob_num = 'Mobile Number is required';
            isValid = false;
        }
        if (formData.subject.trim() === '') {
            newErrors.subject = 'Subject is required';
            isValid = false;
        }
        if (formData.message.trim() === '') {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        if (isValid) {
            // Submit the form (you can add your submission logic here)
            setSubmitting('Form submitted successfully.');
        } else {
            // Display errors
            setErrors(newErrors);
            setSubmitting('Please fill in all required fields.');
        }
    };

  return (
    <>
    <section className='main_content'>
      <div className='contact_us'>
        <div className="contact_us_banner banner_img1">
        <div className="banner_overlay"></div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3781023348665!2d78.37996937471168!3d17.44160800124172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb934013867eef%3A0x82fdc7498bfdc0ed!2sRENT%20A%20DESK%20-%20Mind%20Space!5e0!3m2!1sen!2sin!4v1694939777131!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <div className="banner_contact">
          <div className="contact_head mt-5">
            <div className="breadcrumbs">
              <Link to={"/"}>Home <span><i class="fas fa-angle-right"></i></span></Link>
              <p>Contact us <span><i class="fas fa-angle-right"></i></span></p>
            </div>
            <h1 className='mt-3'>Contact Us</h1>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section>
    <section class="ftco-section p-5">
		<div class="container">
			{/* <div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Contact Form #01</h2>
				</div>
			</div> */}
			<div class="row justify-content-center">
				<div class="col-lg-10 col-md-12">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-12">
								<div class="contact-wrap w-100 p-5 p-5">
									<h3 class="mb-4">Get in touch</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		{/* <div id="form-message-success" class="mb-4">
				            Your message was sent, thank you!
				      		</div> */}
						     <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control ${errors.fname ? 'error' : ''}`}
                                name="fname"
                                placeholder="First Name"
                                value={formData.fname}
                                onChange={handleInputChange}
                            />
                            {errors.fname && <span className="error-message">{errors.fname}</span>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control ${errors.lname ? 'error' : ''}`}
                                name="lname"
                                placeholder="Last Name"
                                value={formData.lname}
                                onChange={handleInputChange}
                            />
                            {errors.lname && <span className="error-message">{errors.lname}</span>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'error' : ''}`}
                                name="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control ${errors.mob_num ? 'error' : ''}`}
                                name="mob_num"
                                placeholder="Enter Your Mobile No."
                                value={formData.mob_num}
                                onChange={handleInputChange}
                            />
                            {errors.mob_num && <span className="error-message">{errors.mob_num}</span>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input
                                type="text"
                                className={`form-control ${errors.subject ? 'error' : ''}`}
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                            {errors.subject && <span className="error-message">{errors.subject}</span>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea
                                name="message"
                                className={`form-control ${errors.message ? 'error' : ''}`}
                                cols="30"
                                rows="7"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" id="SendMessage" className="btn btn-primary">
                            Send Message
                        </button>
                        <div className={`submitting ${errors.submitting ? 'error-message' : ''}`}>
                            {submitting}
                        </div>
                    </div>
                </div>
            </form>
								</div>
							</div>
							{/* <div class="col-md-5 d-flex align-items-stretch">
								<div class="info-wrap w-100 p-lg-5 p-4">
									<h3 class="mb-4 mt-md-4">Contact us</h3>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Website</span> <a href="#">yoursite.com</a></p>
					          </div>
				          </div>
			          </div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </section>
    </>
    
  )
}

export default ContactUs