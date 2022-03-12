import React from 'react'

export default function Contacts() {
    return (
        <div id='contact'>

           
            <form>
            <h1> Order Food  </h1>

                <input type='text'placeholder='Full Name'/>
                <input type='tel' placeholder='Phone Number '/>
                <input type='tel' placeholder='Home Address '/>
                <textarea placeholder='Address to pick up Delivery and additional details'></textarea>
                <input type='submit'value='Order'/>
            </form>
            
        </div>
    )
}
