import React from 'react';
import {Route} from  'react-router-dom';
import Home from './views/Home';
import Restaurante from './views/RegistroRestaurante';
import Login from './views/Login';
import Registro from './views/Registro';
import Pedido from './views/Pedido';



function Routes() {
  return (
    <>
        <Route exact path="/" component={Home} />
        <Route exact path="/Restaurante" component={Restaurante} />
        <Route exact path="/Pedido/:id" component={Pedido} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Registro" component={Registro} />
    </>
  );
}

export default Routes;