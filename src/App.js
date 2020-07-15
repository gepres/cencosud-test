import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// components
import Navigation from './components/layout/Navigation'
import Carrito from './components/compra/Carrito'
import DetallesPago from './components/compra/DetallesPago' 

function App() {
  return (
  <Router>
      <Fragment>
        <Navigation />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Carrito} />
            <Route exact path="/detalles" component={DetallesPago} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  )
}

export default App;
