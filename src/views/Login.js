import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import useForm from '../hooks/useForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';

const LOGIN = gql`
	mutation LOGIN($correo:String!,$contrasenia:String!){
		login(correo:$correo,contrasenia:$contrasenia){
			token
		}
	}
`


function Login({history}) {
	const  [sendLogin] = useMutation(LOGIN);
	const submitLogin = async(fields) =>{
		const mutation = await sendLogin({variables:{...fields}})
								.catch( e => console.log(e))
		if(mutation){
			const {login} = mutation.data;
			localStorage.setItem('blogToken',login.token);
			history.push('/')
		}
		
	} 
	const {inputs,handleInputChange,handleSubmit} =  useForm(submitLogin);

    return (
        <>
            <Header />
            <main className="block top-padd30 gray-bg registro">
			<div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-lg-12">
                            <div class="login-register-wrapper">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12 col-lg-6">
                                        <div class="sign-popup-wrapper brd-rd5">
                                            <div class="sign-popup-inner brd-rd5">
                                                <div class="sign-popup-title text-center">
                                                    <h4 itemprop="headline">Iniciar sesión</h4>
                                                    <span>Con tus redes sociales</span>
                                                </div>
                                                <div class="popup-social text-center">
                                                    <a class="facebook brd-rd3" href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i> Facebook</a>
                                                    <a class="google brd-rd3" href="#" title="Google Plus" itemprop="url" target="_blank"><i class="fa fa-google-plus"></i> Google</a>
                                                    <a class="twitter brd-rd3" href="#" title="Twitter" itemprop="url" target="_blank"><i class="fa fa-twitter"></i> Twitter</a>
                                                </div>
                                                <span class="popup-seprator text-center"><i class="brd-rd50"> o </i></span>
                                                <form class="sign-form">
                                                    <div class="row">
                                                        <div class="col-md-12 col-sm-12 col-lg-12 col-xs-12">
														<Input name="correo"
                                                            label="Correo"
                                                            type="email"
															placeholder="Correo"
															value={inputs.correo}
															onChange={handleInputChange}
                                                            required
                                                        />
                                                        <Input name="contrasenia"
                                                            label="Contraseña"
                                                            type="password"
															placeholder="Contraseña"
															value={inputs.contrasenia}
															onChange={handleInputChange}
                                                            required
                                                        />
                                                            <button class="red-bg brd-rd3" type="submit">Ingresar</button>
                                                        </div>
                                                        <div class="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                                            <a class="sign-btn" href="#" title="" itemprop="url">No eres miembro? Registrate</a>
                                                            <a class="recover-btn" href="#" title="" itemprop="url">Olvidé mi contraseña</a>
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

export default Login;