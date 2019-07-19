import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import useForm from '../hooks/useForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';

const CREATE_POST = gql`
    mutation crearUsuario ($data: createAuthorInput!) {
        crearUsuario(data: $data) {
            nombre
            apellido
            telefono
            correo
            genero
            contrasenia   
        }
    }
`

function Registro({ history }) {
    const [sendSignup, { error }] = useMutation(CREATE_POST)

    const catchSubmit = async (fields) => {
        if (fields.password != "") {
            await sendSignup({ variables: { data: { ...fields } } })
            error ? alert("Hubo un error") : history.push('/Registro')
            //alert("Usuario guardado correctamente")
        } else {
            alert("Datos incorrectos")
        }

    }
    const { inputs, handleInputChange, handleSubmit } = useForm(catchSubmit);

    return (
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
                                        <form className="sign-form" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <Input name="nombre"
                                                    label="Nombre"
                                                    type="text"
                                                    value={inputs.nombre}
                                                    onChange={handleInputChange}
                                                    placeholder="Nombre"
                                                    required
                                                />
                                                <Input name="apellido"
                                                    label="Apellido"
                                                    type="text"
                                                    placeholder="Apellido"
                                                    value={inputs.apellido}
                                                    onChange={handleInputChange}
                                                />
                                                <Input name="genero"
                                                    label="sexo"
                                                    type="text"
                                                    placeholder="sexo"
                                                    value={inputs.genero}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                <Input name="telefono"
                                                    label="Telefono"
                                                    type="text"

                                                    placeholder="Telefono"
                                                    value={inputs.telefono}
                                                    onChange={handleInputChange}

                                                />
                                                <Input name="correo"
                                                    label="Correo"
                                                    type="email"
                                                    placeholder="Correo"
                                                    value={inputs.correo}
                                                    onChange={handleInputChange}

                                                />
                                                <Input name="contrasenia"
                                                    label="Contraseña"
                                                    type="password"
                                                    placeholder="Contraseña"
                                                    value={inputs.contrasenia}
                                                    onChange={handleInputChange}
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
            <Footer />
        </>
    )
}

export default Registro;