import React from 'react'
import PopularTour from './PopularTour'
import Navigation from './Navigation'
import Footer from './Footer'
const Services = () => {
	return (
		<>
			<Navigation />
			<section class="inner-page-banner" style={{backgroundImage:'url("assets/img/banner/tour-banner.jpg")'}}>
		  <div class="page-banner-caption">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>Services</h1>
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active">Services</li>
						</ol>
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

			<PopularTour />


		</>
	)
}

export default Services