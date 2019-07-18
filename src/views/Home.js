import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Platillo from '../components/Platillo';
import image from '../images/topbg.jpg';


function Home() {
	return (
		<>
			<Header />
			<main className="mt-5">
				<section>
					<div className="block">
						<div style={{ backgroundImage: `url(${image})` }} className="fixed-bg"></div>
						<div className="restaurant-searching text-center">
							<div className="restaurant-searching-inner">
								<h2>Ordene <span>Comida en Línea </span> de los Mejores Restaurantes</h2>
								<form className="restaurant-search-form brd-rd2">
									<div className="row mrg10">
										<div className="col-md-6 col-sm-5 col-lg-5 col-xs-12">
											{/* <div className="input-field brd-rd2"><input className="brd-rd2" type="text" placeholder="Restaurant Name"></div> */}
										</div>
										<div className="col-md-4 col-sm-4 col-lg-4 col-xs-12">
											{/* <div className="input-field brd-rd2"><i className="fa fa-map-marker"></i><input className="brd-rd2" type="text" placeholder="Search Location"><i className="fa fa-location-arrow"></i></div> */}
										</div>
										<div className="col-md-2 col-sm-3 col-lg-3 col-xs-12">
											<button className="brd-rd2 red-bg" type="submit">BUSCAR</button>
										</div>
									</div>
								</form>
							</div>
							{/* <img className="left-scooty-mockup" src="assets/images/resource/restaurant-mockup1.png" alt="restaurant-mockup1.png" itemprop="image">
							<img className="bottom-clouds-mockup" src="assets/images/resource/clouds.png" alt="clouds.png" itemprop="image"> */}
						</div>
					</div>
				</section>
				<section>
					<div className="block">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-lg-12">
								<div className="title1-wrapper text-center">
									<div className="title1-inner">
										<span>SU COMIDA FAVORITA</span>
										<h2 >Elija & Disfrute</h2>
									</div>
								</div>
							</div>
							<div className="col-12">
							<div className="container">
						   </div>
								<div className="row remove-ext5">
										<Platillo />
										<Platillo />
										<Platillo />
										<Platillo />
										<Platillo />
										<Platillo />
										<Platillo />
										<Platillo />
										<Platillo />


										
									</div>
								</div>
									
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer/>
		</>
	)
}

export default Home;