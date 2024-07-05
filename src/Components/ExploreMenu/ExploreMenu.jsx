import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
export default function ExploreMenu({category,setCategory}) {
  return <>
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a Delectable array of Dishes Crafted with the finest Ingredients and Culinary experties. Our mission is to statisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list container ">
        <div className="row p-2">
        {menu_list.map((menu,index) => {
          return <>
            <div onClick={() => setCategory(prev=>prev===menu.menu_name?"All":menu.menu_name) } className="explore-menu-item col-md-3" key={index}>
              <img className={category===menu.menu_name?"active":""} src={menu.menu_image} alt="" />
              <p>{menu.menu_name}</p>
            </div>
            </>
        })}
        </div>
      </div>
      <hr />
    </div>
  
  </>
  
}
