import React from 'react'
import '../App.css'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Footer from '../components/Footer'

function Menubar() {
  return (
    <div>
<div className='MENUSS'>
<img className='imageblur' width={1280} height={500} src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMG9uJTIwdGFibGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />


</div>

<div className="menufonts">

    <span className='main-font'>Our Menus</span>
    <span className='main-font2'>Perfect for all Breakfast, Lunch and Dinner</span>
</div>




<Breakfast/>
<Lunch/>
<Dinner/>
<Footer/>





    </div>

    
  )
}

export default Menubar