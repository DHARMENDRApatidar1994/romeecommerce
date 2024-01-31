import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [isMobile,setIsMobile] = useState(false)
  return (
    <div>
      <div className='nav d-flex justify-content-between align-items-center w-100'>
        <div className='left d-flex w-25  ms-5 mt-2'>
          {/* <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/Anthem-Logo.png" alt="" /> */}
          <h3 className='text-light'>E-COMMERCE</h3>

        </div>
        <div className={isMobile ? "nav-links-mobile" :  "right d-flex justify-content-evenly col-3" }  
        onClick={()=>setIsMobile(false)}>
          <Link to="" className='text-decoration-none'><h6>DHARMENDRA</h6></Link>
          <Link to="/cart" className='text-decoration-none'><h6><i class="ri-shopping-cart-2-fill"></i></h6></Link>
          <Link to="" className='text-decoration-none'><h6>LOGOUT</h6></Link>
        </div>
        <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>{isMobile ? <i class="ri-close-line"></i> : <i class="ri-menu-line"></i> }</button>
      </div>
      
    </div>
  )
}

export default Navbar