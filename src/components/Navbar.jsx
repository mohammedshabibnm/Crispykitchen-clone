import React from 'react'
import "../App.css"
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return ( <div>

<div className="mainnavb">

<div className="crispyhed">
<Link to='/'  className='nodec'><h1 className='hehov'>Crispy Kitchen</h1></Link>
</div>

<div className="menuba">
<Link to='/' className='nodec'><span className='hov'>Home</span></Link>
<Link to = '/stor'  className='nodec'><span className='hov'>Story</span></Link>
<Link to = '/menu'  className='nodec'><span className='hov'>Menu</span></Link>
<Link to= '/updates'  className='nodec'><span className='hov'>Our Updates</span></Link>
<Link to= '/cont'  className='nodec'><span className='hov'>Contact</span></Link>


</div>

<div className="navlast">
    <Link to='buto'><button className='hovbut'>Reservation</button></Link>

</div>



</div>
























<Outlet/>

    </div> );
}

export default Navbar;
