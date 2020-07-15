import React,{Fragment} from 'react'
import {Link,withRouter} from 'react-router-dom'


const Navigation = () => {
  return (
    <Fragment>
        <nav>
        <div className="nav-wrapper">
          <a href="!#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Link to={"/"}>Carrito</Link>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default withRouter(Navigation);