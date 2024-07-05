import React, { useState } from 'react'
import './Home.css';
import Header from '../Header/Header.jsx';
import ExploreMenu from '../ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../FoodDispaly/FoodDisplay.jsx';
import AppDownload from '../AppDownload/AppDownload.jsx';

export default function Home() {
  
  const [category, setCategory] = useState("All");

  return <>
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
    </>
}
