import React from 'react'
import "../App.css"
import rate from "../Img/rating.png"

function Imageful() {
    return ( <div>
<div className="mainimgs">
<img className='imgwid' src="https://cdn-prod.medicalnewstoday.com/content/images/articles/314/314819/delicious-buffet-foods.jpg" alt="" />



</div>

<div className="placemov">

<span className='mainhed'>Delicious </span>
<span className='mainhed'>Steaks</span>
    
</div>

<div className="imgmains">
<img width={600} height={350} src="https://www.tooplate.com/templates/2129_crispy_kitchen/images/slide/ivan-torres-MQUqbmszGGM-unsplash.jpg" alt="" />

</div>

<div className="pizza">
<h2 className='clr'>Sausage Pasta</h2>

<div className="prizetags">
    <span className='prizesizs'>$18.25</span>

</div>



</div>


<div className="rates1">
<span className='whites'>4.6/5</span>
<img width={120} height={150} src={rate} alt="" />
</div>

<div className="spac"></div>






    </div> );
}

export default Imageful;