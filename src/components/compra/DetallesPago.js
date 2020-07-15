import React,{Fragment,useState, useEffect} from 'react'

function DetallesPago({producto}) {
  console.log(producto);
  const [productos,guardarproductos] = useState([
    {
      producto:'Manzana',
      cantidad:1,
      precio:10.00,
      image:'https://valenciagastronomica.com/wp-content/uploads/2016/12/manzana.jpg'
    },
    {
      producto:'pera',
      cantidad:1,
      precio:11.00,
      image:'https://media.mercola.com/assets/images/foodfacts/pear-nutrition-facts.jpg'
    },
    {
      producto:'naranza',
      cantidad:1,
      precio:12.00,
      image:'https://lh3.googleusercontent.com/proxy/YH5g6ItVARGdmIUhoEWD63r8P1rNi3-d4t7_z4DbP3bRybk-aahyg26fpppu-IuhKm3CjwA0C38qpl_hA-uJxjkDTtOAwD4dmVLQJoAhz1Q4uVCGjL1gqWzTlt7QSDsqTDkG3SyBEeD1J0Qcg6Kbu-EowNI5ylsM'
    }
  ])

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
                <img className="border-img" src={item.image} alt={item.producto} />
                <div className="product-details__text">
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