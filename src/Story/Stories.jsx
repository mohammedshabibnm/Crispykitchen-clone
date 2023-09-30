import React from 'react'
import "../App.css"
import Contec from './Contec'
import Owning from './Owning'
import Inputdetail from './Inputdetail'
import Footer from '../components/Footer'

const Stories = () => {
  return (
    <div>
    <div className="divs">

   
    <img className='opcsi' width={1400} height={500} src="https://images.pexels.com/photos/3938891/pexels-photo-3938891.jpeg" alt="" />

    </div>

<div className="kits">

<span className='Ks'>Kitchen's Story</span>

</div>

<div className="blankss">



</div>



<Contec/>
<Owning/>
<Inputdetail/>
<Footer/>
























    </div>
  )
}

export default Stories
