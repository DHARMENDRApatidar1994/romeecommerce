import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import shop from '../assets/images/shop.avif'

const Login = () => {
    const [show,setShow] = useState(false)
    const navigate = useNavigate()
  return (

           <div className='SignMain'>
                                      
                                    <div className='signflex'>
                                     

                                            <div className='signone'>
                                                <img src={shop} alt="" />
                                            </div>
                                            <div className='signtwo'>
                                                <h5 >Welcome to E-commerce. <br /> Sign in to shop much more</h5>
                                                <h6>No account?  <span  onClick={()=>navigate("/signup")}> Sign up</span></h6>
                                                <input className='' type="text" placeholder='Email' />
                                                <div className='eyesshow'>
                                                <input className='eyesshowinput mt-2'  type= {show ?("text" ):("password" )} placeholder='Password' />
                                                {show ? (<i onClick={()=>setShow(false)} class="eyes ri-eye-fill"></i>):(<i onClick={()=>setShow(true)} class="eyes ri-eye-off-fill"></i>)}
                                                </div>
                                                
                                                <p style={{cursor:"pointer"}} >Forgot Password?</p>
                                                <Link to="/product" className='text-dark' ><button >Continue</button></Link>
                                                <h4>or sign in with</h4>
                                                <div className='signicon'>
                                                    <i class="ri-google-fill "></i>
                                                    <i class="ri-facebook-fill ms-2"></i>
                                                </div>

                                           </div> 
                                             </div>

                                       </div>
                                  
   
  )
}

export default Login