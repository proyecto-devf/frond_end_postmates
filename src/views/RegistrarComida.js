import React from 'react';
import Input from '../components/Input';
import Header from '../components/Header';

function RegistrarComida(){
    return(
        <>
            <Header />
            <main className="block top-padd30 gray-bg registro">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                    <div className="login-register-wrapper">
                        <div className="sign-popup-wrapper brd-rd5">
                            <div className="sign-popup-inner brd-rd5">
                                <div className="sign-popup-title text-center">
                                    <h4 >Registrarse</h4>
                                </div>
                                <span className="popup-seprator text-center"><i className="brd-rd50"> o </i></span>
                                <form className="sign-form" >
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
                                        />
                                        <Input name="genero"
                                            label="sexo"
                                            type="text"
                                            placeholder="sexo"
                                            required
                                        />
                                        <Input name="telefono"
                                            label="Telefono"
                                            type="text"

                                            placeholder="Telefono"

                                        />
                                        <Input name="correo"
                                            label="Correo"
                                            type="email"
                                            placeholder="Correo"

                                        />
                                        <Input name="contrasenia"
                                            label="Contraseña"
                                            type="password"
                                            placeholder="Contraseña"
                                        />

                                        <div className="col-6 btn-enviar">
                                            <button className="red-bg brd-rd3" type="submit"> Enviar </button>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                            <a className="sign-btn" href="#" title="" >Ya estas registrado? Ingresa</a>
                                            <a className="recover-btn" href="#" title="" >Recordar mi contraseña</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        </>
        
    )
}

export default RegistrarComida;