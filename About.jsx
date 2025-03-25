import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
const About = () => {
  return (
    <>
	<Navigation/>
    <section class="inner-page-banner" style={{backgroundImage:'url("assets/img/banner/about-banner.jpg")'}}>
		<div class="page-banner-caption">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>About Us</h1>
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active">About Us</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	
	<section class="section-spacing">
		<div class="container">
			<div class="row">
				<div class="col-xl-6">
					<div class="about-text wow fadeIn">
						<h2>We are Destinations</h2>
						<h3>Ready and Go . .</h3>
						<p>Destinations is a trusted travel tour package operator based in Srinagar, J&K. Destinations is serving its customer with a unique blend of experience and innovation in organizing package tours all across  India. We are the most preferred travel partner for some of the well-known corporates in J&K. </p>
						<h3>Our services include:</h3>
						<ul>
							<li>Domestic travels</li>
							<li>International travels</li>
							<li>Railway booking</li>
							<li>Hotel booking</li>
							<li>Handpicked hotels</li>
							<li>Special gifts &amp; offers for you</li>
						</ul>
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
	
	
	<section class="section-spacing inverse-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="section-title text-center">
						<h2><span>ABOUT FOUNDER</span></h2>
						<p>Sorem ipsum dolor sit amet, consectetur adipisicing Suscipit votas aperiam Sorem ipsum dolor consectur adipisicing elit.</p>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-6 col-md-6 col-lg-3">
					<div class="team wow fadeIn">
						<div class="thumb">
							<img src="assets/img/team/2.jpg" alt=""/>
						</div>
						<div class="team-overlay text-center">
							<h3>John Smith</h3>
							<h6>Tour Guide</h6>
							<ul class="social-icons">
								<li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-9">
				<div class="team-info text-start">
							
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo et doloribus inventore, vero sunt quis nesciunt suscipit officia error recusandae atque deserunt voluptatem quibusdam maiores ipsa temporibus at! Esse, mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellat aut reiciendis autem praesentium perspiciatis vitae ea earum enim quos? Possimus esse aliquam soluta saepe voluptas aspernatur unde ab nihil sint molestiae! Itaque dicta autem blanditiis suscipit nam cumque quas!</p>
						</div>
						<div class="team-info text-start">
							<h3>Umer Shafi</h3>
							<p>CEO and Founder  <br />
								Destinations 
								Ready and Go </p>
						</div>
				</div>
			</div>
		</div>
	</section>
    <Footer/>
    </>
  )
}

export default About