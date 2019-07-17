import React from 'react';
import image from '../images/topbg.jpg';

function Navbar(){
    return(
        <section>
					<div className="block">
						<div style={{ backgroundImage: `url(${image})` }} className="fixed-bg"></div>
						<div className="restaurant-searching text-center">
							<div className="restaurant-searching-inner">
								<h2>Order <span>Food Online From</span> the Best Restaurants</h2>
								<form className="restaurant-search-form brd-rd2">
									<div className="row mrg10">
										<div className="col-md-6 col-sm-5 col-lg-5 col-xs-12">
											{/* <div className="input-field brd-rd2"><input className="brd-rd2" type="text" placeholder="Restaurant Name"></div> */}
										</div>
										<div className="col-md-4 col-sm-4 col-lg-4 col-xs-12">
											{/* <div className="input-field brd-rd2"><i className="fa fa-map-marker"></i><input className="brd-rd2" type="text" placeholder="Search Location"><i className="fa fa-location-arrow"></i></div> */}
										</div>
										<div className="col-md-2 col-sm-3 col-lg-3 col-xs-12">
											<button className="brd-rd2 red-bg" type="submit">SEARCH</button>
										</div>
									</div>
								</form>
							</div>
							{/* <img className="left-scooty-mockup" src="assets/images/resource/restaurant-mockup1.png" alt="restaurant-mockup1.png" itemprop="image">
							<img className="bottom-clouds-mockup" src="assets/images/resource/clouds.png" alt="clouds.png" itemprop="image"> */}
						</div>
					</div>
				</section>
    )
}

export default Navbar;