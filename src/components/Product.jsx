import React, { useState } from 'react'
import './Product.css'
import { purple } from './ProductData';
import { useNavigate } from 'react-router-dom';



const Product = () => {
    const [item, setItem] = useState(purple);
    const navigate = useNavigate()
  return (
    <div>
          <div
				className="purple"
				
				
			>
          <h1>RECENT RELEASE</h1>
          <div className="imagecontainer">
            {item.map((item, index) => (
             <div
             className="detail"
             key={index}
           
           
           >
                <div
                  className="images"
                  onClick={() => {
                    // console.log("hello", index);

                    navigate(`/Album/${index}`);
                  }}
                >
                  <img src={`${item.img}`} alt="" />
                 <div className='detailpageicon'>
                  <i class="ri-book-open-line"></i>
                  <p className='viewmore'>view more</p>
                  </div>

                </div>
                <div className="desc">
                  <h4>{item.name}</h4>
                  <div className='d-flex justify-content-evenly'>
                    <div className='d-flex'>
                  <h6 className='me-2 fw-bold'>$:{item.price}</h6>
                  <strike >{item.price}</strike>
                  </div>
                  <h6>OFF:{item.price}%</h6>
                  </div>
                  <button className='buynow'>Buy Now</button>
                  <br />
                  <button className='buynow2 '>Add to cart</button>

                </div>
              </div>
            ))}
          </div>
          </div>
    </div>
  )
}

export default Product