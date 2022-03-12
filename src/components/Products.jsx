import React from 'react'
import Productionbox from './Productionbox'
import pimage0 from '../images/Morpher.jpg'
import pimage1 from '../images/battery.jpg'
import pimage2 from '../images/kraken.jpg'
import pimage3 from '../images/arduino.png'
import pimage4 from '../images/encoder.png'
import pimage5 from '../images/nano.jpg'
import pimage6 from '../images/ras.png'
export default function Products() {
    return (
        <div>

      
      
           <div className="title">
      <br></br>
      <br></br>
      <br></br>
            <h2>Gatchets</h2>
    </div>
        
        <div id= 'maindish'>

        <div className='a-container'>
        <Productionbox image={pimage0} title="Power Morpher"/>    
        <Productionbox image={pimage1} title="Lipo Eternity Battery"/>
        <Productionbox image={pimage2} title="Kraken Motor Wheels"/>
        <Productionbox image={pimage3} title="Motor Core"/>
        </div>
        <div className='a-container'>
        <Productionbox image={pimage4} title="Regen Bracelet"/>
        <Productionbox image={pimage5} title="Jetson Nano"/>
        <Productionbox image={pimage6} title="Raspberry Pi"/>

        </div>




        </div>
        </div>
    )
}
