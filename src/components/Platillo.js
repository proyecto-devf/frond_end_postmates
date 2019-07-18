import React from 'react';
import imagen from '../images/resource/popular-dish-img1.jpg';

function Platillo({_id,oComida}) {
    console.log(oComida.cover_photo)
    return (
        <div className="col-md-4 col-sm-6 col-lg-4 mt-4">
            <div className="popular-dish-box wow fadeIn" data-wow-delay="0.2s">
                <div className="popular-dish-thumb">
                    <a href="food-detail.html" title="" >
                    <img src={oComida.cover_photo} alt="preview" className="d-block"/>
                    </a>
                    <span className="post-rate yellow-bg brd-rd2"><i className="fa fa-star-o"></i> 4.25</span>
                    <span className="post-likes brd-rd4"><i className="fa fa-heart-o"></i> 12</span>
                </div>
                <div className="popular-dish-info">
                    <h4 >
                       {oComida.nombre}
                    </h4>
                    <p >{oComida.descripcion}</p>
                    <span className="price">$ {oComida.precio}</span>
                    <a className="brd-rd2" href="food-detail.html" title="Order Now" >Order Now</a>
                    <div className="restaurant-info">
                        <div className="restaurant-info-inner">
                            <span className="red-clr">Restaurante: Pla</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platillo;