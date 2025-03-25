import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Feedback from './Feedback'
const PopularTour = () => {
  return (
    <>

    {/* <section class="inner-page-banner" style={{backgroundImage:'url("assets/img/banner/tour-banner.jpg")'}}>
		<div class="page-banner-caption">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>Tours</h1>
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active">Tours</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section> */}
	  
	
	<section class="section-spacing inverse-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="section-title text-center">
						<h2><span>Latest tours</span></h2>
						<p>Sorem ipsum dolor sit amet, consectetur adipisicing Suscipit votas aperiam Sorem ipsum dolor consectur adipisicing elit.</p>
					</div>
				</div>
			</div>
			
			<div class="row tours">
				<div class="col-md-12 col-lg-12 col-xl-6">
					<div class="tour-item wow fadeIn">
						<div class="media">
							<div class="thumb">
								<a href="tour-single.html">
									<img src="assets/img/tour/2.jpg" alt=""/>
								</a>
							</div>
							<div class="media-body">
								<div class="tour-info">
									<h3><a href="tour-single.html">Week at Sunny Beach</a></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing Suscipit tas aperiam.</p>
									<div class="tour-price">$850.00 <small>- 2 days 3 nights</small></div>
									<div class="tour-location"><span>Tour in Croatia</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12 col-lg-12 col-xl-6">	
					<div class="tour-item wow fadeIn">
						<div class="media">
							<div class="thumb">
								<a href="tour-single.html">
									<img src="assets/img/tour/3.jpg" alt=""/>
								</a>
							</div>
							<div class="media-body">
								<div class="tour-info">
									<h3><a href="tour-single.html">Week at Sunny Beach</a></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing Suscipit tas aperiam.</p>
									<div class="tour-price">$450.00 <small>- 2 days 3 nights</small></div>
									<div class="tour-location"><span>Tour in Istanbul</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12 col-lg-12 col-xl-6">
					<div class="tour-item wow fadeIn">
						<div class="media">
							<div class="thumb">
								<a href="tour-single.html">
									<img src="assets/img/tour/3.jpg" alt=""/>
								</a>
							</div>
							<div class="media-body">
								<div class="tour-info">
									<h3><a href="tour-single.html">Week at Sunny Beach</a></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing Suscipit tas aperiam.</p>
									<div class="tour-price">$550.00 <small>- 2 days 3 nights</small></div>
									<div class="tour-location"><span>Tour in Singapore</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12 col-lg-12 col-xl-6">	
					<div class="tour-item wow fadeIn">
						<div class="media">
							<div class="thumb">
								<a href="tour-single.html">
									<img src="assets/img/tour/2.jpg" alt=""/>
								</a>
							</div>
							<div class="media-body">
								<div class="tour-info">
									<h3><a href="tour-single.html">Week at Sunny Beach</a></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing Suscipit tas aperiam.</p>
									<div class="tour-price">$850.00 <small>- 2 days 3 nights</small></div>
									<div class="tour-location"><span>Tour in Dubai</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
                </div>
                </div>
                </section>
                <Feedback/>
                <Footer/>
    </>
  )
}

export default PopularTour