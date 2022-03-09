import logo from './logo.svg';
import { useEffect , useState }  from 'react';
import Recipe from './Recipe.js'
import './App.css';

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
      console.log(data);
       setRecipes(data.hits);
      });
  };

const handleSearch = (e) =>{
e.preventDefault();
setSearch(inputName);
}; 

  return (
    
<div className="App">
<form onSubmit={handleSearch} className="form">
<input type="text" placeholder = "Enter recipe name" value = {inputName} onChange={handleInput}  />
<button type = "submit">Submit</button>
</form>
 
 <div className="content">

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
