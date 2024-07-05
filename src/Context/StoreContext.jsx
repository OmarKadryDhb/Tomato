import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContexrProvider = (props) => {

    const [cartItems , setCartItems] = useState({})

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev , [itemId] : 1}))
        
        }
        else{
            setCartItems((prev) => ({...prev , [itemId] : prev[itemId] + 1}))
        }
        console.log(itemId,"sss");
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev ,[itemId] : prev[itemId]-1}))
    }
    
    const getTotalCart= () => {
        let total = 0
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                total += itemInfo.price*cartItems[item]
            }
        }
        return total
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCart
    }
    
    return <>
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
    </>
}

export default StoreContexrProvider;