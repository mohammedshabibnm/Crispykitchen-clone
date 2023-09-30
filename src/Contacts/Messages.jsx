import React from 'react'
import '../App.css'

function Messages() {
  return (
    <div>

<div className="leavemsg"></div>

<div className="messagess">

<div className="mesage1">

    <div className="fontmes">
<span className='amess'>Leave a message</span>
</div>

<div className="inp">
<div class="input-group">
    <label class="label">Name</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email"/>
    <div></div></div>

    <div class="input-group">
    <label class="label">phone no</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email"/>
    <div></div></div>

</div>

<div className="email1">


<div class="input-group">
    <label class="label">Email</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email"/>
    <div></div></div>

</div>

<div className="butts">

<button class="button2">
    Send
</button> 
</div>



</div>
<div className="mesage2">

<div className="times">

<div className="times1">
<span className='week'>Weekdays</span><br />
<span className='mond'>Monday to Friday</span><br />
<span className='tym'>10:00 AM - 08:00 PM</span>
</div>

<div className="times1">
<span  className='week'>Weekends</span><br />
<span className='mond'>Saturday and Sunday</span><br />
<span className='tym'>11:00 AM - 11:00 PM</span>
</div>


</div>


</div>


</div>



















    </div>
  )
}

export default Messages