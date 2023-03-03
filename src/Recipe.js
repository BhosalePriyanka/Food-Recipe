import React from 'react';
import {Col, Image, Row} from 'react-bootstrap'

function Recipe( { title , calories , image , ingredients  }){
	return(
<>

<div className ="m-5 p-2 shadow border rounded text-center" style = {{width : "30rem" , height :  "auto", backgroundColor:"pink"}}>
<div className='fw-bold fs-5 text-uppercase '>{title}</div>

<Image fluid src = {image} alt = "recipe" />
<div>Cal:{calories}</div>
<div>{ingredients.map(ingredient => (
	<div>{ingredient.text}</div> 
     ))}
</div>

</div>
</>
)}

export default Recipe;