import React, { useState } from 'react'

const Cart = () => {
    const [add,setAdd] = useState(1)
  return (
    <div className='pt-5'>
        <h3 className='mt-5 pt-5 ms-3'>Your cart (4 items)</h3>
        <div>
            <div className='col-10 d-flex justify-content-evenly align-items-center ms-3 mt-5 bg-secondary p-3 text-light'>
                <h6 className='col-4'>Item</h6>
                <h6 className='col-2'>Price</h6>
                <h6 className='col-2'>Quantity</h6>
                <h6 className='col-2'>Total</h6>
            </div>
            <div className='d-flex justify-content-evenly align-items-center ms-3 shadow mt-2 col-10'>
                <div className='col-4  d-flex align-items-center'>
                <img className='col-2' src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/03-7.jpg" alt="" />
                <h3 className='col-6'>Product name</h3>
                </div>
                <h4 className='col-2'>$ 125</h4>
                <div className='d-flex align-items-center col-2  '>
                    <button className=' px-3 border border-none rounded bg-danger fs-4' onClick={()=>setAdd(add-1)}>-</button>
                    <p className='bg-warning px-3 mt-3 border border-none rounded  fs-4'>{add}</p>
                    <button className='px-3 border border-none rounded bg-success fs-4' onClick={()=>setAdd(add+1)}>+</button>
                </div>
                <h4 className='col-2'>$ {125 * add} <i className="ri-delete-bin-line text-danger"></i></h4>

            </div>
           
            <div className='col-9 d-flex justify-content-end align-items-end flex-column mt-5 '>
                <div className='d-flex justify-content-between col-4 '>
                    <h6 className='col-4'>Subtotal</h6>
                    <h6 className='col-2'>:</h6>
                    <p className='col-2 me-3'>$1234</p>         
                </div>
                <div className='d-flex justify-content-between col-4 '>
                    <h6 className='col-4'>Sales Tax</h6>
                    <h6 className='col-2'>:</h6>
                    <p className='col-2 me-3'>$1234</p>         
                </div>
                <div className='d-flex justify-content-between col-4 '>
                    <h6 className='col-4'>Grand Total</h6>
                    <h6 className='col-2'>:</h6>
                    <p className='col-2 me-3'>$1234</p>         
                </div>
                <div className='col-4'>
                    <button className='bg-dark text-light col-12 rounded p-2 '>Check Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart