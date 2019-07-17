import React from "react";
import { Link } from 'react-router-dom';


function Header(){
    return (
        <header className="stick">
                <div className="topbar">
                    <div className="container">
                        {/* <div className="select-wrp">
                            <select data-placeholder="Feel Like Eating">
                                <option>FEEL LIKE EATING</option>
                                <option>Burger</option>
                                <option>Pizza</option>
                                <option>Fried Rice</option>
                                <option>Chicken Shots</option>
                            </select>
                        </div>
                        <div className="select-wrp">
                            <select data-placeholder="Choose Location">
                                <option>CHOOSE LOCATION</option>
                                <option>New york</option>
                                <option>Washington</option>
                                <option>Chicago</option>
                                <option>Los Angeles</option>
                            </select>
                        </div> */}
                        <div className="topbar-register">
                            <a className="log-popup-btn" href="#" title="Login" >LOGIN</a> / <a className="sign-popup-btn" href="#" title="Register" >REGISTER</a>
                        </div>
                        <div className="social1">
                            <a href="#" title="Facebook"  target="_blank"><i className="fa fa-facebook-square"></i></a>
                            <a href="#" title="Twitter"  target="_blank"><i className="fa fa-twitter"></i></a>
                            <a href="#" title="Google Plus"  target="_blank"><i className="fa fa-google-plus"></i></a>
                        </div>
                    </div>                
                </div>
                <div className="logo-menu-sec">
                    <div className="container">
                    <div className="logo"><h1 ><a href="index-2.html" title="Home" ></a></h1></div>
                    <nav>
                        <div className="menu-sec">
                            <ul>
                                <li className="menu-item-has-children"><a href="#" title="HOMEPAGES" ><span className="red-clr">FOOD ORDERING</span>HOMEPAGES</a>
                                    <ul className="sub-dropdown">
                                        <li><a href="index-2.html" title="HOMEPAGE 1" >HOMEPAGE 1</a></li>
                                        <li><a href="index2.html" title="HOMEPAGE 2" >HOMEPAGE 2</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="#" title="RESTAURANTS" ><span className="red-clr">REAL FOOD</span>RESTAURANTS</a>
                                    <ul className="sub-dropdown">
                                        <li><a href="restaurant-found.html" title="RESTAURANT 1" >RESTAURANT 1</a></li>
                                        <li><a href="restaurant-found2.html" title="RESTAURANT 2" >RESTAURANT 2</a></li>
                                        <li><a href="restaurant-detail.html" title="RESTAURANT DETAILS" >RESTAURANT DETAILS</a></li>
                                        <li><a href="food-recipes.html" title="RESTAURANT DETAILS" >FOOD RECIPES</a></li>
                                        <li><a href="our-articles.html" title="RESTAURANT DETAILS" >OUR ARTICLES</a></li>
                                        <li><a href="our-menu.html" title="RESTAURANT DETAILS" >OUR MENU</a></li>
                                        <li><a href="our-services.html" title="RESTAURANT DETAILS" >OUR SERVICES</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="#" title="PAGES" ><span className="red-clr">REAL FOOD</span>PAGES</a>
                                    <ul className="sub-dropdown">
                                        <li className="menu-item-has-children"><a href="#" title="BLOG" >BLOG</a>
                                            <ul className="sub-dropdown">
                                                <li className="menu-item-has-children"><a href="#" title="BLOG LAYOUTS" >BLOG LAYOUTS</a>
                                                    <ul className="sub-dropdown">
                                                        <li><a href="blog-right-sidebar.html" title="BLOG WITH RIGHT SIDEBAR" >BLOG (W.R.S)</a></li>
                                                        <li><a href="blog-left-sidebar.html" title="BLOG WITH LEFT SIDEBAR" >BLOG (W.L.S)</a></li>
                                                        <li><a href="blog.html" title="BLOG WITH NO SIDEBAR" >BLOG</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><a href="#" title="BLOG DETAIL" >BLOG DETAIL</a>
                                                    <ul className="sub-dropdown">
                                                        <li><a href="blog-detail-right-sidebar.html" title="BLOG DETAIL WITH RIGHT SIDEBAR" >BLOG DETAIL (W.R.S)</a></li>
                                                        <li><a href="blog-detail-left-sidebar.html" title="BLOG DETAIL WITH LEFT SIDEBAR" >BLOG DETAIL (W.L.S)</a></li>
                                                        <li><a href="blog-detail.html" title="BLOG DETAIL WITH NO SIDEBAR" >BLOG DETAIL</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><a href="#" title="BLOG FORMATES" >BLOG FORMATES</a>
                                                    <ul className="sub-dropdown">
                                                        <li><a href="blog-detail-video.html" title="BLOG DETAIL WITH VIDEO" >BLOG DETAIL (VIDEO)</a></li>
                                                        <li><a href="blog-detail-audio.html" title="BLOG DETAIL WITH AUDIO" >BLOG DETAIL (AUDIO)</a></li>
                                                        <li><a href="blog-detail-carousel.html" title="BLOG DETAIL WITH CAROUSEL" >BLOG DETAIL (CAROUSEL)</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#" title="SPECIAL PAGES" >SPECIAL PAGES</a>
                                            <ul className="sub-dropdown">
                                                <li><a href="404.html" title="404 ERROR" >404 ERROR</a></li>
                                                <li><a href="search-found.html" title="SEARCH FOUND" >SEARCH FOUND</a></li>
                                                <li><a href="search-not-found.html" title="SEARCH NOT FOUND" >SEARCH NOT FOUND</a></li>
                                                <li><a href="coming-soon.html" title="COMING SOON" >COMING SOON</a></li>
                                                <li><a href="login-register.html" title="LOGIN & REGISTER" >LOGIN & REGISTER</a></li>
                                                <li><a href="price-table.html" title="PRICE TABLE" >PRICE TABLE</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#" title="GALLERY" >GALLERY</a>
                                            <ul className="sub-dropdown">
                                                <li><a href="gallery.html" title="FOOD GALLERY" >FOOD GALLERY</a></li>
                                                <li><a href="gallery-detail.html" title="GALLERY DETAIL" >GALLERY DETAIL</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            {/* <a href="register-reservation.html" title="REGISTER RESERVATION" ></a> */}
                                            <Link to="/Restaurante" >REGISTER RESERVATION</Link>    
                                        </li>
                                        <li><a href="how-it-works.html" title="HOW IT WORKS" >HOW IT WORKS</a></li>
                                        <li><a href="dashboard.html" title="USER PROFILE" >USER PROFILE</a></li>
                                        <li><a href="about-us.html" title="ABOUT US" >ABOUT US</a></li>
                                        <li><a href="food-detail.html" title="FOOD DETAIL" >FOOD DETAIL</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html" title="CONTACT US" ><span className="red-clr">REAL FOOD</span>CONTACT US</a></li>
                            </ul>
                            {/* <a  href="register-reservation.html"  >REGISTER RESTAURANT</a> */}
                            <Link to="/Restaurante" className="red-bg brd-rd4" title="Register" >REGISTER RESERVATION</Link>    

                        </div>
                    </nav>
                    </div>
                </div>
        </header>
    )
}

export default Header;