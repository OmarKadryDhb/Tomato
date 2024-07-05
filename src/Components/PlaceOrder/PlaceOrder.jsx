import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './PlaceOrder.css'
import './../Cart/Cart.css'

export default function PlaceOrder() {

  const {getTotalCart} = useContext(StoreContext)

  return <>
    <form className='placeorder'>
      <div className="place-order-left">
        <p className='del-title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Address' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
            <div className="cart-total-details-parent">
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>$ {getTotalCart()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>$ {getTotalCart()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>$ {getTotalCart()===0?0:getTotalCart()+2}</b>
              </div>
            </div>
            <button>Payment method</button>
        </div>
      </div>
    </form>
  </>
}
