import React from 'react';
import {Route} from  'react-router-dom';
import Home from './views/Home'


function Routes() {
  return (
    <>
        <Route exact path="/" component={Home} />
    </>
  );
}

export default Routes;