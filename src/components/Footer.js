import React from 'react';
import imagen from '../images/logo.png';

function Footer() {
    return (
        <footer>
            <div className="block top-padd80 bottom-padd80 dark-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="footer-data">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-lg-3">
                                        <div className="widget about_widget wow fadeIn" data-wow-delay="0.1s">
                                            <div className="logo"><h1 ><a href="#" title="Home" >
                                                <img src={imagen} alt="preview" className="d-block" />
                                                {/* <img src="assets/images/logo.png" alt="logo.png" itemprop="image"> */}
                                            </a></h1></div>
                                                <p ></p>
                                                <div className="social2">
                                                    <a className="brd-rd50" href="#" title="Facebook"  target="_blank"><i className="fa fa-facebook"></i></a>
                                                    <a className="brd-rd50" href="#" title="Google Plus"  target="_blank"><i className="fa fa-google-plus"></i></a>
                                                    <a className="brd-rd50" href="#" title="Twitter"  target="_blank"><i className="fa fa-twitter"></i></a>
                                                    <a className="brd-rd50" href="#" title="Pinterest"  target="_blank"><i className="fa fa-pinterest"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-lg-3">
                                            <div className="widget information_links wow fadeIn" data-wow-delay="0.2s">
                                                <h4 className="widget-title" >TIPOS DE TACOS</h4>
                                                <ul>
                                                    <li><a href="#" title="" >Tacos</a></li>
                                                    <li><a href="#" title="" >Tacos de Camaron</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-lg-3">
                                            <div className="widget customer_care wow fadeIn" data-wow-delay="0.3s">
                                                <h4 className="widget-title" >ATENCIÓN AL CLIENTE</h4>
                                                <ul>
                                                    <li><a href="#" title="" >Devoluciones</a></li>
                                                    <li><a href="#" title="" >Datos de envío</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-lg-3">
                                            <div className="widget get_in_touch wow fadeIn" data-wow-delay="0.4s">
                                                <h4 className="widget-title" >CONTACTO</h4>
                                                <ul>
                                                    <li><i className="fa fa-phone"></i> (0044) 8647 1234 587</li>
                                                    <li><i className="fa fa-envelope"></i> <a href="#" title="" >postmates@postmates.com</a></li>
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
        </footer>
    )
}

export default Footer;