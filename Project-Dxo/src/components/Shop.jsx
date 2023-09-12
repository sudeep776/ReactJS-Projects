import React from 'react'
import list from '../List'
import Card from './Card'

const Shop = ({handleClick}) => {
  return (
    <section>
      {list.map((item)=>{
        return <Card item={item} key={item.id} handleClick={handleClick}/>
      })}
    </section>
  )
}

export default Shop