import React, { useContext } from 'react'
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
export default function Cart() {

  const {getTotalCart , removeFromCart , food_list , cartItems } = useContext(StoreContext)

  const navigate = useNavigate()

  return <>
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((i,index)=>{
          if (cartItems[i._id]>0) {
            return<>
              <div className="cart-items-title cart-items-item">
                <img src={i.image} alt="" />
                <p>{i.name}</p>
                <p>$ {i.price}</p>
                <p>{cartItems[i._id]}</p>
                <p>$ {i.price*cartItems[i._id]}</p>
                <p className='remove' onClick={()=>removeFromCart(i._id)}><i class="fa-solid fa-trash"></i></p>
              </div>
              <hr />
            </>
          }
        })}
      </div>
      <div className="cart-bottom">
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
            <button onClick={()=>navigate("/order")}>Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p className="fw-bold">Promo Code</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter PromoCode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
}
