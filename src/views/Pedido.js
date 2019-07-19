import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks'
import Header from '../components/Header';
import Input from '../components/Input';

const BUSCAR_COMIDA = gql`
	query BuscarComida($id:ID!){
		buscarComida(id:$id){
			nombre,
			precio,
			cover_photo,
			descripcion,
			restaurante
		}
	}
`;

function Pedido({ match }) {
	const { id } = match.params;
	const { data, loading, error } = useQuery(BUSCAR_COMIDA, { variables: { id } })
	console.log(loading ? "Cargando" : data.buscarComida.nombre);

	if (error) {
		return <h4>Error interno</h4>
	} else {
		return (
			<>
				<Header />
				{
					loading ?
						<h1>Cargando</h1>
						:
						<section className="cont_pedido">
							<div className="block gray-bg bottom-padd210 top-padd30">
								<div className="container">
									<div className="row">
										<div className="col-md-12">
											<div className="sec-box">
												<div className="sec-wrapper">
													<div className="container-fluid">
														<div className="row">
															<div className="col-8">
																<div className="restaurant-detail-wrapper">
																	<div className="restaurant-detail-info">
																		<div className="restaurant-detail-thumb">
																			<ul className="restaurant-detail-img-carousel">
																				<li>
																					<img className="brd-rd3" src={data.buscarComida.cover_photo} alt="preview" />
																				</li>
																			</ul>
																		</div>
																		<div className="restaurant-detail-title">
																			<h1 ></h1>
																			<div className="info-meta">
																				<span>{data.buscarComida.nombre}</span>
																			</div>
																			<div className="rating-wrapper">
																				<div className="rate-share brd-rd5">
																					<div className="rating-box-wrapper">
																						<span>Rate</span>
																						<div className="rating-box">
																							<span className="brd-rd2 clr1 on"></span>
																							<span className="brd-rd2 clr2 on"></span>
																							<span className="brd-rd2 clr3 on"></span>
																							<span className="brd-rd2 clr4 on"></span>
																							<span className="brd-rd2 clr5 on"></span>
																							<span className="brd-rd2 clr6 on"></span>
																							<span className="brd-rd2 clr7 off"></span>
																							<span className="brd-rd2 clr8 off"></span>
																							<i>4.0</i>
																						</div>
																					</div>
																					<div className="share-wrapper">
																						<div className="fb-share">
																							<label className="switch">
																								<span className="switch-slider brd-rd30"></span>
																							</label>
																							<a className="facebook brd-rd2" href="#" title="" ><i className="fa fa-facebook-square"></i> Share on Facebook</a>
																						</div>
																						<div className="fb-share">
																							<label className="switch">
																								<span className="switch-slider brd-rd30"></span>
																							</label>
																							<a className="twitter brd-rd2" href="#" title="" ><i className="fa fa-twitter"></i> Share on Twitter</a>
																						</div>
																					</div>
																				</div>
																			</div>
																			<span className="price">${data.buscarComida.precio}</span>
																			<div className="qty-wrap">
																				<Input name="cantidad"
																					className="qty"
																					type="text"
																					placeholder="1"
																					required
																				/>
																			</div>
																			<p >{data.buscarComida.descripcion}</p>
																			<h1></h1>
																			<a className="col-12 brd-rd3" href="#" title="" >Ordenar</a>
																		</div>
																	</div>
																</div>
															</div>
															<div className="col-4">
																<div className="order-wrapper">
																	<div className="order-inner gradient-brd">
																		<h4 >Orden actual</h4>
																		<div className="order-list-wrapper">
																			<ul className="order-list-inner">
																				<li>
																					<div className="dish-name">
																						<i>.3</i> <h6 >Chicken Tandoori Special</h6> <span className="price">$100.00</span>
																					</div>
																					<div className="dish-ingredients">
																					</div>
																				</li>
																			</ul>
																			<ul className="order-total">
																				<li><span>SubTotal</span> <i>$158</i></li>
																				<li><span>Descuento</span> <i>$70</i></li>
																			</ul>
																			<ul className="order-method brd-rd2 red-bg">
																				<li><span>Total</span> <span className="price">$340</span></li>
																				<li><a className="brd-rd2" href="#" title="" >Confirmar orden</a></li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
				}
			</>
		)
	}
}

export default Pedido;