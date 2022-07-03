import React from 'react'
import { BiSearch,BiCaretLeft,BiCaretRight,BiBell} from "react-icons/bi";
import './navbar.css'
import image from './2.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav">
            <div className="carets">
               <span><BiCaretLeft/></span>
               <span><BiCaretRight/></span>
            </div>
            <div className="search">
                <form action="">
                    <input type="text" name=""placeholder="search"/>
                    <button className='btn'><BiSearch/></button>
                </form>
            </div>
            <div className="profile">
                <span><BiBell/></span>
                <div className="account">
                    <img src={image} alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar