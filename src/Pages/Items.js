import React from 'react'
import Categories from '../Components/Categories'


const Items = ({list}) => {

  return (
    <div>
        <Categories details={list}/>
    </div>
  )
}

export default Items