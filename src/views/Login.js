import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import useForm from '../hooks/useForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';

const LOGIN = gql`
mutation login($correo:String!,$contrasenia:String!){
 login(correo:$correo,contrasenia:$contrasenia){
   token
 }
}
`

function Login({ history }) {
    const [sendLogin] = useMutation(LOGIN);
    const submitLogin = async (fields) => {
        const mutation = await sendLogin({ variables: { ...fields } })
            .catch(e => console.log(e))
        if (mutation) {
            const { login } = mutation.data;
            localStorage.setItem('blogToken', login.token);
            history.push('/')
        }

    }
    const { inputs, handleInputChange, handleSubmit } = useForm(submitLogin);

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
                                            <h4 >Iniciar Sesion </h4>
                                            <form className="sign-form" onSubmit={handleSubmit}>
                                                <div className="row">

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
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login;