import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Platillo from '../components/Platillo';
import image from '../images/topbg.jpg';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Input from '../components/Input';

const listarComidas = gql`
	query listarComidas {
		lstComidas {
			_id,
			nombre,
			precio,
			cover_photo,
			descripcion,
			restaurante
		}
	}		
`


function Home() {
	const { data, loading, error } = useQuery(listarComidas);

	if (error) {
		return <h4>Error interno</h4>
	} else {
		return (
			<>
				<Header />
				<main className="mt-5">
					<section>
						<div className="block">
							<div style={{ backgroundImage: `url(${image})` }} className="fixed-bg"></div>
							<div className="restaurant-searching text-center">
								<div className="restaurant-searching-inner">
									<h2>Order <span>Food Online From</span> the Best Restaurants</h2>
									<form className="restaurant-search-form brd-rd2">
										<div className="row mrg10">
											<div className="col-md-6 col-sm-5 col-lg-8 col-xs-12">
												<Input name="buscar"
													className="input-field brd-rd2 w-100"
													type="text"
													placeholder="Restaurante"
													required
												/>
												{/* <div className=""><input className="brd-rd2" type="text" placeholder="Restaurant Name"></div> */}
											</div>
											
											<div className="col-md-2 col-sm-3 col-lg-3 col-xs-12">
												<button className="brd-rd2 red-bg" type="submit">SEARCH</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="block">
							<div className="container">
								<div className="row">
									<div className="col-md-12 col-sm-12 col-lg-12">
										<div className="title1-wrapper text-center">
											<div className="title1-inner">
												<span>Su comida favorita</span>
												<h2 >Platillos dispobiles</h2>
											</div>
										</div>
									</div>
									<div className="col-12">
										<div className="container">
										</div>
										<div className="row remove-ext5">
											{
												//<h4>Loading...</h4>
												//console.log(listarComidas)
												loading ? <h4>Loading...</h4>
													: data.lstComidas.map(comida => (
														<Platillo _id={comida._id} oComida={comida} key={comida._id} />)
													)
											}

										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</>
		)
	}
}

export default Home;