import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';

function Registro() {
    return (
        <>
            <Header />
            <main className="block top-padd30 gray-bg registro">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="login-register-wrapper">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-lg-6">
                                        <div className="sign-popup-wrapper brd-rd5">
                                            <div className="sign-popup-inner brd-rd5">
                                                <div className="sign-popup-title text-center">
                                                    <h4 itemprop="headline">Registrarse</h4>
                                                    <span>Con tus redes sociales</span>
                                                </div>
                                                <div className="popup-social text-center">
                                                    <a className="facebook brd-rd3" href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i> Facebook</a>
                                                    <a className="google brd-rd3" href="#" title="Google Plus" itemprop="url" target="_blank"><i class="fa fa-google-plus"></i> Google</a>
                                                    <a className="twitter brd-rd3" href="#" title="Twitter" itemprop="url" target="_blank"><i class="fa fa-twitter"></i> Twitter</a>
                                                </div>
                                                <span className="popup-seprator text-center"><i class="brd-rd50"> o </i></span>
                                                <form className="sign-form">
                                                    <div className="row">
                                                        <Input name="nombre"
                                                            label="Nombre"
                                                            type="text"
                                                            placeholder="Nombre"
                                                            required
                                                        />
                                                        <Input name="apellido"
                                                            label="Apellido"
                                                            type="text"
                                                            placeholder="Apellido"
                                                            required
                                                        />
                                                        <Input name="direccion"
                                                            label="Direccion"
                                                            type="text"
                                                            placeholder="Direccion"
                                                            required
                                                        />
                                                        <Input name="telefono"
                                                            label="Telefono"
                                                            type="text"
                                                            placeholder="Telefono"
                                                            required
                                                        />
                                                        <Input name="correo"
                                                            label="Correo"
                                                            type="email"
                                                            placeholder="Correo"
                                                            required
                                                        />
                                                        <Input name="contrasenia"
                                                            label="Contraseña"
                                                            type="password"
                                                            placeholder="Contraseña"
                                                            required
                                                        />

                                                        <div className="col-md-3 col-sm-3 col-lg-6 col-xs-3">
                                                            <button className="red-bg brd-rd3" type="submit"> Enviar </button>
                                                        </div>
                                                        <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                                            <a className="sign-btn" href="#" title="" itemprop="url">Ya estas registrado? Ingresa</a>
                                                            <a className="recover-btn" href="#" title="" itemprop="url">Recordar mi contraseña</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Registro;