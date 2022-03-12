import React from 'react'
import DrinkBox from './DrinkBox'
import pimage1 from '../images/arduino-logo.png'
import pimage2 from '../images/git.png'
import pimage3 from '../images/opencv.png'
import pimage4 from '../images/tensor.png'
import pimage5 from '../images/pytorch.png'
import pimage6 from '../images/stack.png'
import pimage7 from '../images/python.jpg'
import pimage8 from '../images/c.png'
export default function Drinks() {
    return (
        <div id= 'drinks'>
            
            
        <div className='a-container'>
        <DrinkBox image={pimage1} title=""/>
        <DrinkBox image={pimage2} title=""/>
        <DrinkBox image={pimage3} title=""/>
<DrinkBox image={pimage4} title=""/>
        </div>

        <div className='a-container'>
        
        <DrinkBox image={pimage5} title=""/>
        <DrinkBox image={pimage6} title=""/>
        <DrinkBox image={pimage7} title=""/>
        <DrinkBox image={pimage8} title=""/>
        </div>

        </div>
    )
}
