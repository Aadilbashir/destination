import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
const Careers = () => {
  return (
    <>
    <Navigation/>
    
    <section class="inner-page-banner" style={{backgroundImage:'url("assets/img/banner/hotel-banner.jpg")'}}>
		<div class="page-banner-caption">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>Careers</h1>
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active">Careers</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
	
      <section class="section-spacing">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="news-details">
                <div class="post-thumb">
                  {/* <img src="assets/img/news/1.jpg" alt=""/> */}
                </div>

                <h3>Week at Sunny Beach</h3>

                <div class="content-block">

                  <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</blockquote>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>

                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="sidebar" id="sidebar">
                <div class="sidebar-inner">
                  <div class="book-tour">
                    <h3><small>Apply here</small> </h3>
                    <div class="sidebar-item sidebar-widget">
                    <div class="footer-widget">
							<ul>
								<li><i class="fa fa-phone" aria-hidden="true"></i> +880 17980XXXXX</li>
								<li><i class="fa fa-envelope-o" aria-hidden="true"></i> info@example.com</li>
							</ul>
						</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
<Footer/>
    </>
  )
}

export default Careers