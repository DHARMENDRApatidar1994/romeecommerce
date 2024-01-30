import React, { useState } from 'react'
import shop from '../assets/images/shop.avif'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [show,setShow] = useState(false)
    const [confirmPass, setConfirmPass] = useState(false)
    const navigate = useNavigate()
  return (
    <div className='sinmain2'>
   
        <div className='signflex2'>
            <div className='signone2'>
                <img src={shop} alt="" />

            </div>
            <div className='signtwo2'>
                <h5 >Welcome to E-commerce. <br /> Sign up to enjoy shopping</h5>
                <h6>Already resistered?  <span
                 onClick={() => navigate("/")}
                 > Sign in</span></h6>
                <input className='' type="text" placeholder='name' />
                <input className='' type="text" placeholder='Email' />
              
                <input className='border border-warning mt-2' type="number" placeholder='Contact number' />
                <input className='mt-2'  type= {show ?("text" ):("password" )} placeholder='Password' />
                {show ? (<i onClick={()=>setShow(false)} class="eyes ri-eye-fill"></i>):(<i onClick={()=>setShow(true)} class="eyes ri-eye-off-fill"></i>)}
                <p>Password must be at  least 8  characters with 1 uppercase letter and 1 special charactor</p>
                <button>Sign Up</button>
                <h3>By signing up. you accept our <span>Terms of Use</span> and <span>Privacy Policy</span></h3>

                <h4>or continue with</h4>
                <div className='signicon2'>
                    <i class="ri-google-fill "></i>
                    <i class="ri-facebook-fill ms-5"></i>
                </div>




            </div>

        </div>
    </div>

  )
}

export default SignUp