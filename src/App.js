
import { useEffect , useState }  from 'react';
import Recipe from './Recipe.js'
import {Form,Button} from 'react-bootstrap'
function App() {

const APP_ID = "ff4fef2f";
const APP_KEY = "d9a1e7d458f5c0e5aef540a14313adfd";


const [recipes, setRecipes] = useState([]);
const [inputName, setInputname] = useState("");
const[search, setSearch] = useState();

const handleInput = (event) => {
  setInputname(event.target.value);

}

useEffect(() =>{
getRecipes();
}, [search]);

 const getRecipes = () => {
  fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then((response) => response.json())
     .then((data) => {
       setRecipes(data.hits);
      });
  };

const handleSearch = () =>{
setSearch(inputName);
}; 
console.log(search)
console.log(inputName)
  return (
    
<div>
<Form onClick={handleSearch} className="w-50 mx-auto text-center">
<Form.Control type="text" placeholder = "Enter recipe name" value = {inputName} onChange={handleInput}  />
<Button>Submit</Button>
</Form>
 
 <div  className = "d-flex flex-wrap justify-content-center">

{recipes.map(recipe =>(
<Recipe 
key = {recipe.recipe.label}
title = {recipe.recipe.label} 
 calories = { recipe.recipe.calories } 
 image = {recipe.recipe.image}
 ingredients = {recipe.recipe.ingredients}/>

))}
</div>
</div>


  );
}

export default App;

