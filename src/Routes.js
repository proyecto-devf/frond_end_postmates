import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './utils/autentificacion';
import Home from './views/Home';
import Restaurante from './views/RegistroRestaurante';
import Login from './views/Login';
import Registro from './views/Registro';
import Pedido from './views/Pedido';
import RegistroComida from './views/RegistrarComida';

function Logout() {
  localStorage.removeItem('blogToken')
  return <Redirect to="/login" />
}

const SecureLogout = isAuthenticated(Logout);


function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/Restaurante" component={Restaurante} />
      <Route exact path="/Pedido/:id" component={Pedido} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/logout" component={SecureLogout} />
      <Route exact path="/Registro" component={Registro} />
      <Route exact path="/RegistrarComida" component={RegistroComida} />
    </>
  );
}

export default Routes;