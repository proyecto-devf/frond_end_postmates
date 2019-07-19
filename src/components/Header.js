import React from "react";
import { Link } from 'react-router-dom';


function Header(){
    return (
        <header className="stick">
                <div className="topbar">
                    <div className="container">
                        
                        <div className="topbar-register">
                            <a className="log-popup-btn" href="#" title="Login" >INICIAR  SESIÓN</a> / <a className="sign-popup-btn" href="#" title="Register" >REGISTRASTE</a>
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
                                <li className="menu-item-has-children"><Link to="/"  title="HOMEPAGES" ><span className="red-clr">Ordenar comida </span>Páginas de Inicio</Link>
                                </li>
                                <li className="menu-item-has-children"><a href="#" title="RESTAURANTS" ><span className="red-clr">Comidas</span>Restaurantes</a>
                                    <ul className="sub-dropdown">
                                        <li><a href="restaurant-found.html" title="RESTAURANT 1" >Comidas</a></li>
                                        <li><a href="restaurant-found2.html" title="RESTAURANT 2" >Restaurante</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html" title="CONTACT US" ><span className="red-clr"> 9998763151 </span>Contáctenos</a></li>
                            </ul>
                            <Link to="/Restaurante" className="red-bg brd-rd4" title="Register" >REGISTER RESERVATION</Link>    
                        </div>
                    </nav>
                    </div>
                </div>
        </header>
    )
}

export default Header;