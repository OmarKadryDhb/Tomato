import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import fire from './../../assets/fire.png'
export default function FoodDisplay({category}) {
  
  const {food_list} = useContext(StoreContext)  

  return <>
    <div className='food-display' id='food-display'>
        <div className="content-parent d-flex justify-content-start align-items-center">
            <h2>Top Dishes</h2>
            <div className="fire-img">
                <img className='' src={fire} alt="" />
            </div>
        </div>
        <div className="food-display-list">
            {food_list.map((i,index) => {
                if(category ==="All" || category===i.category){
                    return <FoodItem key={index} id={i._id} name={i.name} description={i.description} image={i.image} price={i.price}/>
                }

            })}
        </div>
    </div>
    </>
  
}
