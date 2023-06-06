import React from 'react'
import '../header/Navbar.css'
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import  Badge  from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
function Navbar() {
  return (
    <header>
      <nav>
        <div className='left'>
            <div className='logo'>
                <img src='https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-fast-delivery-icon-delivery-icon-png-image_2047531.jpg' alt=''/>
            </div>
            <div className='nav_searchbar'>
            <input type="text" name=""/>
            <div className='search_icon'>
                <SearchIcon id='search'/>
            </div>
            </div>
        </div>
        <div className='right'>
        <div className='nav_btn'>
            <a href="">signin</a>
        </div>
        <div className='cart_btn'>
        <Badge badgeContent color="primary">
            <ShoppingCartIcon id="icon"/>
        </Badge>
        <p>Cart</p>
        </div>
        <Avatar className='avatar'/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
