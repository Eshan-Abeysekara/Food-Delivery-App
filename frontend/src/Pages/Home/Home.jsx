import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExplorMenu from '../../Components/ExplorMenu/ExplorMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExplorMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
