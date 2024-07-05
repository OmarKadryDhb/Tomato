import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from './../../Context/StoreContext';
export default function FoodItem({ id , name , description , image ,price}) {
  
  const {addToCart , removeFromCart , cartItems } = useContext(StoreContext)

    return <>
    <div className='food-item'>
        <div className="food-item-img-parent">
            <img className='food-item-img' src={image} alt="" />
            {!cartItems[id]
            ?<img src={assets.add_icon_white} onClick={() => addToCart(id)} className="add" alt="" />
            :<div className="food-item-counter d-flex align-items-center">
                <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
                <p className='m-0'>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>

            }     
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <h6 className='mt-2'>{name}</h6>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>{price} $</p>
        </div>
    </div>
  
  </>
}
