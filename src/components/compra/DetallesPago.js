import React,{Fragment, useContext} from 'react'
import {CRMContext} from '../../context/CRMContext'
function DetallesPago() {
  const [productos,guardarproductos] = useContext(CRMContext)

  let nuevoTotal = 0;
  productos.map(producto => nuevoTotal += (producto.cantidad * producto.precio))

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="detallesPago-monto">
  <span className="grey-text darken-4-text">Subtotal <span>$ {nuevoTotal}</span></span>
            <span className="grey-text darken-4-text">Descuento total <span>$ 0</span></span>
  <span className="deep-orange-text darken-4-text">Total <span>$ {nuevoTotal}</span></span>
          </div>
        </div>
      
        <div className="detallesPago-content">
          <div className="row">
          { productos.map((item,index) => (
            <div className="col s12 product-details-col"  key={item.producto}>
              <div  className="product-details">
                <div className="detallesPago__text">
                  <img className="border-img" src={item.image} alt={item.producto} />
                  <span className="grey-text">{item.producto}</span>
                </div>
                <div className="product-details__actions detallesPago-content-precio">
                  <span className="grey-text">$ {item.precio}</span>
                </div>
              </div>
            </div>
          ))
          }
          </div>
        </div>

        <div className="content-pagar">
          <button>Pagar</button>
        </div>

      </div>
    </Fragment>
  )
}

export default DetallesPago;