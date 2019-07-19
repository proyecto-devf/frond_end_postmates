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
                                            <h1>Inicar Sesión</h1>
                                            <span className="popup-seprator text-center"><i className="brd-rd50"> o </i></span>
                                            <form className="sign-form" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-12 lb-login">
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
                                                    </div>
                                                    <div className="col-5.5 btn-enviar-login">
                                                        <button className="red-bg brd-rd3" type="submit"> Enviar </button>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                                        <a className="sign-btn" href="#" title="">No eres miembro? Registrate</a>
                                                        <a className="recover-btn" href="#" title="" >Olvidé mi contraseña</a>
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