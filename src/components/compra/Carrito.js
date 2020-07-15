import React,{Fragment,useState, useEffect} from 'react'
import {Link,withRouter} from 'react-router-dom'
import DetallesPago from './DetallesPago' 

function Carrito(props) {
  // state
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
  const [total, guardarTotal] = useState(0)
  const [unidades, guardarUnidades] = useState(0)

  useEffect(() => {

    const actualizarPedido = () => {
      // si el arreglo de productos es igual 0  : el total es cero
      if(productos.length === 0){
        guardarTotal(0)
        return;
      }

      // calcular nuevo total
      let nuevoTotal = 0;
      let unidadesTotales = 0;
      // recorrer todos los productos, sus cantidades y precios
      productos.map(producto => nuevoTotal += (producto.cantidad * producto.precio))
      productos.map(producto => unidadesTotales += producto.cantidad )
      // almacenar en el total
      guardarTotal(nuevoTotal)
      guardarUnidades(unidadesTotales)
    }

    // consultarPedido()
    actualizarPedido()

    
  },[productos])

  const aumentarProductos = (i) => {
    const todosProductos = [...productos]
    // ingremento
    todosProductos[i].cantidad++;
    guardarproductos(todosProductos)
  }

  const restarProductos = (i) => {
    const todosProductos = [...productos]
    if(todosProductos[i].cantidad === 0) return ;
    todosProductos[i].cantidad--;
    guardarproductos(todosProductos)

  }

  return (
    <Fragment>
     <header className="carrito-header">
       <button className="waves-effect waves-teal btn-flat">
       <i className="fas fa-chevron-left"></i>
       </button>
       <span>
         Mi carrito
       </span>
       <button  className="waves-effect waves-teal btn-flat">
       <i className="fas fa-trash-alt red-text accent-4-text"></i>
       </button>
     </header>

     <main className="carrito-main">
        <div className="container">
          <div className="title"> 
            <span>tienes <b className="light-green-text accent-4-text">{unidades} unid.</b></span>
          </div>
          <div className="row">
          { productos.map((item,index) => (
              <div className="col s12 col-product" key={item.producto}>
              <div className="product-details">
                <img src={item.image} alt={item.producto} />
                <div className="product-details__text">
                  <span className="grey-text">{item.producto}</span>
                  <span className="deep-orange-text accent-3-text"><b>$</b> {item.precio}.00</span>
                </div>
                <div className="product-details__actions">
                  <button className="btn-floating btn-small waves-effect waves-light grey lighten-1"><i className="fas fa-minus" onClick={() => restarProductos(index)}></i></button>
                  <span className="px-3">{item.cantidad}</span>
                  <button className="btn-floating btn-small waves-effect waves-light orange darken-2" onClick={() => aumentarProductos(index)}><i className="fas fa-plus"></i></button>
                </div>
              </div>
            </div>
            ))
            }
          </div>
        </div>
     </main>
     <footer className="carrito-footer">
       <div className="carrito-footer__text">
         <span>Total</span>
          <b>$ {total}.00</b>
       </div>
      
       <Link to={"/detalles"} className="waves-effect waves-light btn-large">ir a pagar <i className="fas fa-chevron-right"></i></Link>
    </footer>
   </Fragment>
  )
}

export default withRouter(Carrito);