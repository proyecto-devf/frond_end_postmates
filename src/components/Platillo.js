import React from 'react';
import imagen from '../images/resource/popular-dish-img1.jpg';
import { Link } from 'react-router-dom';

function Platillo() {
    return (
        <div className="col-md-4 col-sm-6 col-lg-4 mt-4">
            <div className="popular-dish-box wow fadeIn" data-wow-delay="0.2s">
                <div className="popular-dish-thumb">
                    <a href="food-detail.html" title="" >
                    <img src={imagen} alt="preview" className="d-block"/>
                        {/* <img src="assets/images" alt="popular-dish-img1.jpg" itemprop="image"> */}
                    </a>
                    <span className="post-rate yellow-bg brd-rd2"><i className="fa fa-star-o"></i> 4.25</span>
                    <span className="post-likes brd-rd4"><i className="fa fa-heart-o"></i> 12</span>
                </div>
                <div className="popular-dish-info">
                    <h4 ><a href="food-detail.html" title="" >
                        Maenaam Thai Restaurant</a>
                    </h4>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <span className="price">$85.00</span>
                    <Link to="/Pedido" className="red-bg brd-rd4" title="Register" >Ordenar</Link>
                    <div className="restaurant-info">
                        {/* <img src="assets/images/resource/restaurant-logo1.png" alt="restaurant-logo1.png" itemprop="image"> */}
                        <div className="restaurant-info-inner">
                            <h6 ><a href="restaurant-detail.html" title="" >Fabio al Porto Ristorante</a></h6>
                            <span className="red-clr">5th Avenue New York 68</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platillo;