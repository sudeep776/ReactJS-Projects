import React, { useEffect, useState } from 'react'
import '../styles/Cart.css'

const Cart = ({cart,setCart,handleChange}) => {
  const[price,setPrice] = useState(0);
  
  const handleRemove = (id)=>{
    const arr = cart.filter((item)=>{
      return item.id !==id
    })
    setCart(arr)
  }

  useEffect(()=>{
    handlePrice();
  })

  const handlePrice = ()=>{
    let ans = 0
    cart.map((item)=>{
      ans+=item.amount * item.price
    })
    setPrice(ans)
  }

  return (
    <div>
      <article>
        {
          cart.map((item)=>(
            <div className='cart_box' key={item.id}>
              <div className='cart_img'>
                <img src={item.img} alt="image" />
                <p>{item.title}</p>
              </div>
              <div>
                <button onClick={()=>handleChange(item,+1)}>+</button>
                <button onClick={()=>handleChange(item,-1)}>-</button>
              </div>
              <div>
                <span>{item.price}</span>
                <button onClick={()=>{
                  handleRemove(item.id)
                }}>Remove</button>
              </div>
            </div>
          ))
        }
        <div className='total'>
          <span>Total Price of your cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
    </div>
  )
}

export default Cart