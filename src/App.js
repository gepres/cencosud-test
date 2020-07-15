import React,{Fragment,useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {CRMContext,CRMProvaider} from './context/CRMContext'
// components
import Navigation from './components/layout/Navigation'
import Carrito from './components/compra/Carrito'
import DetallesPago from './components/compra/DetallesPago' 

function App() {
  // utilizar context en el componente
  const [productos,guardarProductos] = useContext(CRMContext)
  return (
  <Router>
      <Fragment>
      <CRMProvaider value={[productos,guardarProductos]}>
        <Navigation />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Carrito} />
            <Route exact path="/detalles" component={DetallesPago} />
          </Switch>
        </div>
      </CRMProvaider>
      </Fragment>
    </Router>
  )
}

export default App;
