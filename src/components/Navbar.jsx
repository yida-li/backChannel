import React,{useState} from 'react';
import { Button, Link } from 'react-scroll';

import styled from '@emotion/styled'
export default function Navbar() {

    const [nav,setnav] = useState(false);
    const changeBackground = ()=> {

        if( window.scrollY>=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    const Button = styled.button`
    padding: 12px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `
    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>

            <input className='menu-btn' type='checkbox'id='menu-btn'/>
            <label className='menu-icon' for ='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
            <li><Link to ="title"smooth={true} duration={2000}> Memories </Link></li>
                
                <li><Link to ="about"smooth={true} duration={2000}> Our goal </Link></li>
                <li><Link to ="about2"smooth={true} duration={2000}> About us </Link></li>
                
        <li><Link to ="maindish"smooth={true} duration={2000}> Component & Tools </Link></li>
               <li><Link to ="contact"smooth={true} duration={2000}> Order (Coming Soon) </Link></li>
            </ul>
           

            
        </nav>
    )
}
