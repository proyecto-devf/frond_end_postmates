import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';

function RegistroRestaurante() {
	return (
		<>
			<Header />
			<main className="block top-padd30 gray-bg registro">
			<div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-12">
												<h1>Registrar restaurante</h1>
                                            <form className="restaurant-info-form brd-rd5">
												<Input name="email"
												label="Email"
												type="email"
												placeholder="Email"
												required 
												/>
												<Input name="password"
												label="Password"
												type="password"
												placeholder="password"
												required 
												/>
                                   </form>
                            </div>
                         </div>
                    </div>
			</main>
			<Footer />	
		</>
	)
}

export default RegistroRestaurante;