import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
    <Navigation/>
    <section class="inner-page-banner" style={{backgroundImage:'url("assets/img/banner/contact-banner.jpg")'}}>
		<div class="page-banner-caption">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>Contact Us</h1>
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active">Contact Us</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	
	<section class="section-spacing">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="contact-info text-center wow fadeIn">
						<i class="fa fa-phone-square"></i>
						<h3>Make a Call</h3>
						<p><a href="tel:+61383766284">+61 3 8376 6284</a><br/><a href="tel:+61383766284">+61 3 8376 6284</a></p>
					</div>
				</div>
				
				<div class="col-md-4">
					<div class="contact-info text-center wow fadeIn">
						<i class="fa fa-envelope-open-o"></i>
						<h3>Send a Mail</h3>
						<p><a href="mailto:info@example.com">info@example.com</a><br/><a href="mailto:info@example.com">info@example.com</a></p>
					</div>
				</div>
				
				<div class="col-md-4">
					<div class="contact-info text-center wow fadeIn">
						<i class="fa fa-map-marker"></i>
						<h3>Find Us</h3>
						<p>123 West Street, Melbourne <br/>Victoria 3000 Australia</p>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12">
					<div class="section-title text-center">
						<h2><span>Have Any Question?</span></h2>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12 col-lg-8 offset-lg-2">
					<form id="contactForm" class="contact-form wow fadeIn" data-toggle="validator" method="post">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<input placeholder="First Name" id="fname" class="form-control" name="fname" type="text" required data-error="Please enter your first name"/>
									<div class="help-block with-errors"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input placeholder="Last Name" id="lname" class="form-control" name="lname" type="text"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<input placeholder="Email Address" id="email" class="form-control" name="email" type="email" required data-error="Please enter your valid email address"/> 
							<div class="help-block with-errors"></div>
						</div>
						
						<div class="form-group">
							<textarea placeholder="Your Comments" id="message" cols="20" rows="8" class="form-control" required data-error="Please enter your comments"></textarea>
							<div class="help-block with-errors"></div>
						</div>
						<div class="text-center">
							<input value="Send Message" name="submit" class="btn btn-primary" type="submit"/>
							<div id="msgSubmit" class="hidden"></div>
						</div>
					</form>
				</div>
				
			</div>
			
		</div>
	</section>
    <Footer/>
    </>
  )
}

export default Contact