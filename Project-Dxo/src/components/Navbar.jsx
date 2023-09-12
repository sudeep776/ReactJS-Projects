import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import '../styles/Navbar.css'


const Navbar = ({size,setShow}) => {
  return (
    <nav>
      <div className='nav-box'>
        <span onClick={()=>setShow(true)} className='my_shop'>
          Dxo Shop
        </span>
        <div className='cart'>
          <span onClick={()=>setShow(false)}>
            <Icon.CartDashFill />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar