import React from "react";
import { Link } from 'react-router-dom';
import imagen from '../images/logo.png';
import payload from '../utils/payload';



function Header() {
    return (
        <header className="stick">
            <div className="topbar">
                <div className="container">

                    <div className="topbar-register">
                        {
                            payload().isAuthenticated ? (
                                <>
                                    <Link to="/" className="log-popup-btn" title="Login" ><p>{payload().user.correo}!!! </p></Link>  /  <Link to="/Logout" className="sign-popup-btn" title="Register" ><p>Salir</p></Link>
                                </>
                            ) : (
                                    <>
                                        <Link to="/Login" className="log-popup-btn" title="Login" ><p>Iniciar Sesión</p> </Link>/<Link to="/Registro" className="sign-popup-btn" title="Register" ><p>Registro</p></Link>
                                    </>
                                )

                        }

                    </div>
                    <div className="social1">
                        <a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook-square"></i></a>
                        <a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
                        <a href="#" title="Google Plus" target="_blank"><i className="fa fa-google-plus"></i></a>
                    </div>
                </div>
            </div>
            <div className="logo-menu-sec">
                <div className="container">
                    <div className="logo"><h1 ><a href="index-2.html" title="Home" >
                        <img src={imagen} alt="preview" className="d-block" />
                    </a></h1></div>
                    <nav>
                        <div className="menu-sec">
                            <ul>
                                <li className="menu-item-has-children"><Link to="/" title="HOMEPAGES" ><span className="red-clr">Ordenar comida </span>Páginas de Inicio</Link>
                                </li>
                                <li className="menu-item-has-children"><a href="#" title="RESTAURANTS" ><span className="red-clr">Comidas</span>Restaurantes</a>
                                    <ul className="sub-dropdown">
                                        <li><Link to="/RegistrarComida" title="RESTAURANT 1" >Comidas</Link></li>
                                        <li><Link to="/Restaurante" title="RESTAURANT 1" >Restaurante</Link></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html" title="CONTACT US" ><span className="red-clr"> 9998763151 </span>Contáctenos</a></li>
                            </ul>
                            <Link to="/Restaurante" className="red-bg brd-rd4" title="Register" >REGISTRAR RESTAURANTE</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;