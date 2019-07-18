import React from 'react';
import imagen from '../images/resource/restaurant-detail-big-img1-1.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';

function Pedido() {
	return (
		<section>
            <div className="block gray-bg bottom-padd210 top-padd30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="sec-box">
    							<div className="sec-wrapper">
    								<div className="col-md-8 col-sm-12 col-lg-8">
    									<div className="restaurant-detail-wrapper">
    										<div className="restaurant-detail-info">
    											<div className="restaurant-detail-thumb">
    												<ul className="restaurant-detail-img-carousel">
    													{/* <li> */}
														<img src={imagen} alt="preview" classNameName="d-block"/>
                                                            {/* </li> */}
    													{/* <li>
                                                            <img className="brd-rd3" src="assets/images/resource/restaurant-detail-big-img1-2.jpg" alt="restaurant-detail-big-img1-2.jpg" itemprop="image"/>

                                                            </li>
    													<li>
                                                            <img className="brd-rd3" src="assets/images/resource/restaurant-detail-big-img1-3.jpg" alt="restaurant-detail-big-img1-3.jpg" itemprop="image"/>

                                                            </li>
    													<li>
                                                            <img className="brd-rd3" src="assets/images/resource/restaurant-detail-big-img1-4.jpg" alt="restaurant-detail-big-img1-4.jpg" itemprop="image"/>

                                                            </li> */}
    												</ul>
    												<ul className="restaurant-detail-thumb-carousel">
    													{/* <li>
                                                            <img className="brd-rd3" src="assets/images/resource/restaurant-detail-small-img1-1.jpg" alt="restaurant-detail-small-img1-1.jpg" itemprop="image"/>

                                                        </li> */}
    													{/* <li>
                                                            <img className="brd-rd3" src="assets/images/resource/restaurant-detail-small-img1-2.jpg" alt="restaurant-detail-small-img1-2.jpg" itemprop="image"/>

                                                        </li>
    													<li>
                                                            <img className="brd-rd3" src="assets/images/resource/restaurant-detail-small-img1-3.jpg" alt="restaurant-detail-small-img1-3.jpg" itemprop="image"/>

                                                        </li>
    													<li>
                                                            <img className="brd-rd3" src="assets/images/resource/restaurant-detail-small-img1-4.jpg" alt="restaurant-detail-small-img1-4.jpg" itemprop="image"/>

                                                        </li> */}
    												</ul>
    											</div>
    											<div className="restaurant-detail-title">
    												<h1 itemprop="headline">Nik Baker's</h1>
    												<div className="info-meta">
    													<span>Greater Kailash (GK) 2</span>
    												</div>
    												<div className="rating-wrapper">
    													<div className="rate-share brd-rd5">
    														<div className="rating-box-wrapper">
    															<span>Rate</span>
    															<div className="rating-box">
    																<span className="brd-rd2 clr1 on"></span>
    																<span className="brd-rd2 clr2 on"></span>
    																<span className="brd-rd2 clr3 on"></span>
    																<span className="brd-rd2 clr4 on"></span>
    																<span className="brd-rd2 clr5 on"></span>
    																<span className="brd-rd2 clr6 on"></span>
    																<span className="brd-rd2 clr7 off"></span>
    																<span className="brd-rd2 clr8 off"></span>
    																<i>4.0</i>
    															</div>
    														</div>
    														<div className="share-wrapper">
    															<div className="fb-share">
    																<label className="switch">
    																	<input type="checkbox"/>
    																	<span className="switch-slider brd-rd30"></span>
    																</label>
    															</div>
    															<div className="fb-share">
    																<label className="switch">
    																	<input type="checkbox"/>
    																	<span className="switch-slider brd-rd30"></span>
    																</label>
    															</div>
    														</div>
    													</div>
    												</div>
    												<span className="price">$85.00</span>
    												<div className="qty-wrap">
    													<input className="qty" type="text" value="1"/>
    												</div>
    												<p itemprop="description">Rennie White, an advertising manager in New York City, leaves for work 10 minutes later these days because she no longer has to wait in line for coffee at a Dunkin' Donuts outlet. Instead, she preorders coffee by sending a text message from her cellphone on the way to work. "I can get off the train and get the coffee and not break my flow," Ms. White says</p>
    												<p itemprop="description">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. uni harum quidem sed rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilares impedit quo repellendus eligendi optio cumque nihilare impedit quo minus id quod maxime.</p>
    											</div>
    										</div>
    									</div>
    								</div>
    								<div className="col-md-4 col-sm-12 col-lg-4">
    									<div className="order-wrapper">
    										<div className="order-inner gradient-brd">
    											<h4 itemprop="headline">Your Order</h4>
    											<div className="order-list-wrapper">
    												<ul className="order-list-inner">
    													<li>
    														<div className="dish-name">
    															<i>.1</i> <h6 itemprop="headline">Chicken Tandoori Special</h6> <span className="price">$85.00</span>
    														</div>
    														<div className="dish-ingredients">
    															<span className="check-box"><input type="checkbox" id="checkbox1-1"/><label for="checkbox1-1"><span>Drink</span> <i>$12</i></label></span>
    															<span className="check-box"><input type="checkbox" id="checkbox1-2"/><label for="checkbox1-2"><span>Butter</span> <i>$12</i></label></span>
    														</div>
    														<div className="mor-ingredients">
    														</div>
    													</li>
    													<li>
    														<div className="dish-name">
    															<i>.2</i> <h6 itemprop="headline">Chicken Tandoori Special</h6> <span className="price">$90.00</span>
    														</div>
    														<div className="dish-ingredients">
    															<span className="check-box"><input type="checkbox" id="checkbox2-1"/><label for="checkbox2-1"><span>Drink</span> <i>$10</i></label></span>
    															<span className="check-box"><input type="checkbox" id="checkbox2-2"/><label for="checkbox2-2"><span>Butter</span> <i>$20</i></label></span>
    														</div>
    														<div className="mor-ingredients">
    														</div>
    													</li>
    													<li>
    														<div className="dish-name">
    															<i>.3</i> <h6 itemprop="headline">Chicken Tandoori Special</h6> <span className="price">$100.00</span>
    														</div>
    														<div className="dish-ingredients">
    															<span className="check-box">
                                                                    <input type="checkbox" id="checkbox3-1"/>
                                                                    <label for="checkbox3-1"><span>Drink</span> <i>$30</i></label></span>
    														</div>
    														{/* <div className="mor-ingredients">
    															<a className="red-clr" href="#" title="" itemprop="url">Edit</a>
    															{/* <div className="ingradient-list yellow-bg">
    																<span className="check-box">
                                                                        <input type="checkbox" id="checkbox4-1"/>
                                                                            <label for="checkbox4-1"><span>Extra Drink</span></label></span>
    																<span className="check-box">
                                                                        <input type="checkbox" id="checkbox4-2"/>
                                                                    <label for="checkbox4-2"> 
                                                                            <span>Extra Drink</span></label> 
                                                                            </span>
    																<span className="check-box">
                                                                        <input type="checkbox" id="checkbox4-3"/>
                                                                    <label for="checkbox4-3"> 
                                                                            <span>Extra Drink</span></label>
                                                                            </span>
    															</div> 
    														</div> */}
    													</li>
    												</ul>
    												<ul className="order-total">
    													<li><span>SubTotal</span> <i>$158</i></li>
    													<li><span>Delivery fee</span> <i>$70</i></li>
    													<li><span>Tax</span> <i>$12</i></li>
    												</ul>
    												<ul className="order-method brd-rd2 red-bg">
    													<li><span>Total</span> <span className="price">$340</span></li>
    													<li><span className="radio-box">
                                                        {/* <input type="radio" name="method" id="pay1-1"> */}
                                                            <label for="pay1-1"><i className="fa fa-money"></i> Cash</label></span> <span className="radio-box">
                                                                {/* <input type="radio" name="method" id="pay1-2"> */}
                                                                    <label for="pay1-2">
                                                                        <i className="fa fa-credit-card-alt"></i> Card</label>
                                                                    </span></li>
    													<li>
															<a className="brd-rd2" href="#" title="" itemprop="url">CONFIRM ORDER</a></li>
    												</ul>
    											</div>
    										</div>
    									</div>
    								</div>
    							</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	)
}

export default Pedido;