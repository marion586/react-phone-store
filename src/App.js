
//just the browserouter will gonna import it to the index.js
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';

import Navabar from './components/Navabar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
function App() {
  return (
      <React.Fragment>
          <Navabar />
          <Switch>
              
              <Route exact path="/" component={ProductList}></Route>
              <Route  path="/details" component={Details}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route  component={Default}></Route>
              
          </Switch>
          <Modal/>
      </React.Fragment>
  );
}

export default App;
