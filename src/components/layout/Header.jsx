import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

const Header = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg  ">
  <div className="container nav-section col-9 ">
    <a className="navbar-brand" href="#">
    <img className='nav-image img-fluid rounded-circle' src='assets/Gnosis.png'/>
    </a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link active"  href="#">Protocol</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active"  href="#">Safe</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active" href="#">GnosisDAO</a>
        </li>
        
        <li className="nav-item ">
          <a className="nav-link active" href="#" >Developers</a>
         </li>
         <li className="nav-item">
          <a className="nav-link active" href="#">Careers</a>
        </li>
        </ul>     
    </div>
  </div>
</nav>
    </>
  )
}

export default Header