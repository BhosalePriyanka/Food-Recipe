import React from 'react';

function Recipe( { title , calories , image , ingredients  }){
	return(
<>
<div className ="recipe">
<div className="title">{title}</div>

<img  src = {image} alt = "" />
<div className="cal">Cal:{calories}</div>
<div>{ingredients.map(ingredient => (
	<div>{ingredient.text}</div> 
     ))}
</div>


	</div>
</>
)}

export default Recipe;