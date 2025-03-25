import React from 'react'

const Slider = () => {
  return (
    <>
    
    <section class="carousel slide" id="banner" data-ride="carousel" data-pause="false">
		<div class="carousel-inner">
			<div class="carousel-item active" style={{backgroundImage:'url("assets/img/banner/slide-1.jpg")'}}>
				<div class="banner-caption">
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<div class="hero-text">
									<h6 class="animated fadeInDown">Consetetur Adipiscing</h6>
									<h1 class="animated fadeInUp">Best travel agency</h1>
									<p class="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
									<a href="contact-us.html" class="btn btn-primary animated fadeInUp">Contact Us</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="carousel-item" style={{backgroundImage:'url("assets/img/banner/slide-2.jpg")'}}>
				<div class="banner-caption">
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<div class="hero-text">
									<h6 class="animated fadeInLeft">Consetetur Adipiscing</h6>
									<h1 class="animated fadeInLeft">Trusted Travel Agency</h1>
									<p class="animated fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
									<a href="contact-us.html" class="btn btn-primary animated fadeInLeft">Contact Us</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="carousel-item" style={{backgroundImage:'url("assets/img/banner/slide-3.jpg")'}}>
				<div class="banner-caption">
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<div class="hero-text">
									<h6 class="animated fadeInRight">Consetetur Adipiscing</h6>
									<h1 class="animated fadeInRight">Get Exclusive Tour</h1>
									<p class="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
									<a href="contact-us.html" class="btn btn-primary animated fadeInRight">Contact Us</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<ol class="carousel-indicators">
				<li data-target="#banner" data-slide-to="0" class="active"></li>
				<li data-target="#banner" data-slide-to="1"></li>
				<li data-target="#banner" data-slide-to="2"></li>
			</ol>
		</div>
	</section>
	<section class="section-spacing">
		<div class="container">
			<div class="row">
				<div class="col-xl-6">
					<div class="about-text wow fadeIn">
						<h2>We are Destinations</h2>
						<h3>Ready and Go . .</h3>
						<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos, In massa urna pellentesque habitant morbi tristique senectus.</p>
						<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos, In massa urna pellentesque habitant morbi tristique senectus.</p>
						<ul>
							<li>We offer daily tours</li>
							<li>Best price guarantee</li>
							<li>Never lose your deposit</li>
							<li>5 star accommodations</li>
							<li>Handpicked hotels</li>
							<li>Special gifts &amp; offers for you</li>
						</ul>
						<a href="contact-us.html" class="btn btn-primary animated fadeInUp mt-3">See More</a>
					</div>
					
				</div>
				<div class="col-xl-6">
					<div class="about-img text-xl-right text-center wow fadeIn">
						<img class="tilt-img" src="assets/img/about-us/1.png" alt=""/>
					</div>
					
				</div>
				
			</div>	
				
		</div>
	</section>
	<section class="section-spacing">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-title text-center">
								<h2><span>Our Services</span></h2>
								<p>Sorem ipsum dolor sit amet, consectetur adipisicing Suscipit votas aperiam Sorem ipsum dolor consectur adipisicing elit.</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 col-md-6 col-lg-4">
							<div class="service-item text-center wow fadeIn">
								<div class="icon">
									<i class="flaticon-train"></i>
								</div>
								<h3>Rail Booking</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
							</div>
						</div>

						<div class="col-sm-6 col-md-6 col-lg-4">
							<div class="service-item text-center wow fadeIn">
								<div class="icon">
									<i class="flaticon-slumber"></i>
								</div>
								<h3>Hotel Booking</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
							</div>
						</div>

						<div class="col-sm-6 col-md-6 col-lg-4">
							<div class="service-item text-center wow fadeIn">
								<div class="icon">
									<i class="flaticon-air-freight"></i>
								</div>
								<h3>Flight Booking</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
							</div>
						</div>

						<div class="col-sm-6 col-md-6 col-lg-4">
							<div class="service-item text-center wow fadeIn">
								<div class="icon">
									<i class="flaticon-tag"></i>
								</div>
								<h3>Ticket Booking</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
							</div>
						</div>

						<div class="col-sm-6 col-md-6 col-lg-4">
							<div class="service-item text-center wow fadeIn">
								<div class="icon">
									<i class="flaticon-ship"></i>
								</div>
								<h3>Cruises Booking</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
							</div>
						</div>

						<div class="col-sm-6 col-md-6 col-lg-4">
							<div class="service-item text-center wow fadeIn">
								<div class="icon">
									<i class="flaticon-house"></i>
								</div>
								<h3>Amazing Tour</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
							</div>
						</div>
					</div>
					
				</div>
			</section>
		
    </>
  )
}

export default Slider