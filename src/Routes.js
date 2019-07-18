import React from 'react';
import {Route} from  'react-router-dom';
import Home from './views/Home'
import Restaurante from './views/RegistroRestaurante'
import Pedido from './views/Pedido'



function Routes() {
  return (
    <>
        <Route exact path="/" component={Home} />
        <Route exact path="/Restaurante" component={Restaurante} />
        <Route exact path="/Pedido" component={Pedido} />
    </>
  );
}

export default Routes;