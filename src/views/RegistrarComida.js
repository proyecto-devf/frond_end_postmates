import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import useForm from '../hooks/useForm';
import Header from '../components/Header';
import Input from '../components/Input';
import isAuthenticated from '../utils/autentificacion';


const CREATE_COMIDA = gql`
    mutation crearcomida ($data: crearComidaRestaurante!) {
        crearComida(data: $data) {
            _id,
            nombre,
            precio,
            descripcion,
            restaurante
        }
    }
`
function RegistrarComida({history}) {
    const [cover_photo,setCoverPhoto] = useState('');
    const [coverPreview,setCoverPreview] =  useState('');

    const [ sendPost, {data,error}]  = useMutation(CREATE_COMIDA);

    const handleCover = event =>{
        const reader = new FileReader();
        const file =  event.target.files[0]

        reader.onloadend = () => {
            setCoverPhoto(file)
            setCoverPreview(reader.result)
        }

        reader.readAsDataURL(file);
    }

    const catchPost = async(fields) => {
       const registro = await sendPost({variables:{data:{...fields,cover_photo}}})
        //alert(JSON.stringify(registro));

        if(registro.data) history.push(`/RegistrarComida`)
        if(error) console.log(error);
    }

    const {inputs,handleInputChange,handleSubmit}  = useForm(catchPost)
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
                                            <h4 >Registrar comida</h4>
                                        </div>
                                        <span className="popup-seprator text-center"><i className="brd-rd50"> o </i></span>
                                        <form className="sign-form" onSubmit={handleSubmit}  >
                                            <div className="row">
                                                <Input name="nombre"
                                                    label="Nombre"
                                                    type="text"
                                                    placeholder="Nombre"
                                                    required
                                                    value={inputs.nombre}
                                                    onChange={handleInputChange}
                                                />
                                                <Input name="precio"
                                                    label="Precio"
                                                    type="number"
                                                    placeholder="Precio"
                                                    value={inputs.precio}
                                                    onChange={handleInputChange}
                                                />
                                                <Input name="descripcion"
                                                    label="Descripcion"
                                                    type="text"
                                                    placeholder="Descripción"
                                                    required
                                                    value={inputs.descripcion}
                                                    onChange={handleInputChange}
                                                />
                                                <Input name="restaurante"
                                                    label="restaurante"
                                                    type="text"
                                                    placeholder="Restaurante"
                                                    required
                                                    value={inputs.restaurante}
                                                    onChange={handleInputChange}
                                                />
                                                <Input
                                                    name="cover_photo"
                                                    label="Cover Photo"
                                                    type="file"
                                                    placeholder="Cover photo"
                                                    onChange={handleCover}
                                                    required
                                                />
                                                <img src={coverPreview} alt="preview" className="d-block w-50" />

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

export default isAuthenticated( RegistrarComida);