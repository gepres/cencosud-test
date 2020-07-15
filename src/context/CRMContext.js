import React,{useState} from 'react'

const CRMContext = React.createContext([{},() => {}])
const CRMProvaider = props => {
  // definir el state inicial
  const [productos,guardarProductos] = useState([
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
      image:'https://cdn1.frutapasion.es/wp-content/uploads/2019/12/naranja-01.jpg'
    }
  ])

  return (
    <CRMContext.Provider value={[productos,guardarProductos]}>
      {props.children}
    </CRMContext.Provider>
  )
}
export {CRMContext,CRMProvaider};