import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
const Gallery = () => {
  return (
    <>
    <Navigation/>
    <section class="inner-page-banner" style={{backgroundImage:'url("assets/img/banner/hotel-banner.jpg")'}}>
		<div class="page-banner-caption">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>Gallery</h1>
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active">Gallery</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	
	<section class="section-spacing bottom-none inverse-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="section-title text-center">
						<h2><span>Gallery</span></h2>
						<p>Sorem ipsum dolor sit amet, consectetur adipisicing Suscipit votas aperiam Sorem ipsum dolor consectur adipisicing elit.</p>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12 text-center">
					<ul id="filter-list">
						<li class="filter active" data-filter="all">All</li>
						<li class="filter" data-filter="1">Asia</li>
						<li class="filter" data-filter="2">Africa</li>
						<li class="filter" data-filter="3">Europe</li>
						<li class="filter" data-filter="4">America</li>
						<li class="filter" data-filter="5">Australia</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="gallery-outer">
			<ul class="gallery-items">
				<li class="filtr-item" data-category ="1">
					<div class="gallery-inner">
						<img src="assets/img/gallery/1.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/1.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="3">
					<div class="gallery-inner">
						<img src="assets/img/gallery/2.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/2.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="2">
					<div class="gallery-inner">
						<img src="assets/img/gallery/3.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="assets/img/gallery/3.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="5">
					<div class="gallery-inner">
						<img src="assets/img/gallery/4.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/4.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="2">
					<div class="gallery-inner">
						<img src="assets/img/gallery/5.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/5.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="4">
					<div class="gallery-inner">
						<img src="assets/img/gallery/6.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/6.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="5">
					<div class="gallery-inner">
						<img src="assets/img/gallery/7.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/7.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="2">
					<div class="gallery-inner">
						<img src="assets/img/gallery/8.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/8.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="1">
					<div class="gallery-inner">
						<img src="assets/img/gallery/1.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/1.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="3">
					<div class="gallery-inner">
						<img src="assets/img/gallery/2.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/2.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="2">
					<div class="gallery-inner">
						<img src="assets/img/gallery/3.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/3.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="5">
					<div class="gallery-inner">
						<img src="assets/img/gallery/4.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/4.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="2">
					<div class="gallery-inner">
						<img src="assets/img/gallery/5.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/5.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="4">
					<div class="gallery-inner">
						<img src="assets/img/gallery/6.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/6.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="5">
					<div class="gallery-inner">
						<img src="assets/img/gallery/7.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/7.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
				<li class="filtr-item" data-category ="2">
					<div class="gallery-inner">
						<img src="assets/img/gallery/8.jpg" alt="" />
						<div class="gallery-overlay">
							<a href="img/gallery/8.jpg" class="venobox" data-gall="gallery"><i class="fa fa-picture-o"></i></a>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</section >
  
    <Footer/>
    
    </>
  )
}

export default Gallery