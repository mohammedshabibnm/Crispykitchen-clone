import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Reser() {
  return (
    <div>

<div className="maincar">
<div className="maincar1">
<div className="close-icon">

<Link to='/'><button class="button1">
  <span class="X"></span>
  <span class="Y"></span>
  <div class="close">Close</div>
</button></Link>


</div>

<div className="keybords">
<div class="input-group">
    <label class="label">Full Name</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email" placeholder='Your Name'/>
    <div></div></div>

    <div class="input-group">
    <label class="label">Email</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email" placeholder='Your Email'/>
    <div></div></div>


</div>
<div className="keyboard2">
<div class="input-group">
    <label class="label">Phone no</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email" placeholder='123-456-789'/>
    <div></div></div>

    <div class="input-group">
    <label class="label">Number of person</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email" placeholder='10 Person'/>
    <div></div></div>



</div>

<div className="keyboard2">
<div class="input-group">
    <label class="label">Date</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email" placeholder='Date'/>
    <div></div></div>

    <div class="input-group">
    <label class="label">Time</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email" placeholder='Time'/>
    <div></div></div>



</div>

<div className="keybord3">

<span className='special-inp'>Special Request</span>
<input className='special-text' type="text" />





</div>


<div className="swith-but">

<button className='Lar-ge'>Reservation</button>


</div>




</div>




</div>






<div className="tea-key">

<img className='grambu' src="https://assets.gqindia.com/photos/608beccb6e6a489a62cd2543/16:9/w_1920,h_1080,c_limit/ingredients%20from%20the%20Indian%20kitchen%20for%20immunity%20building.jpeg" alt="" />

  
</div>








    </div>
  )
}

export default Reser