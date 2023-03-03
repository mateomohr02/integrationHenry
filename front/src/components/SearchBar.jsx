import { useState } from "react";

function SearchBar({onSearch}) {
   
   const[character, setCharacter] = useState('')
   
   

   const handleInput = (event) =>{
      setCharacter(event.target.value)
   }

   return (
      <div>
      <input type='search' value={character} onChange={handleInput}/>
      <button onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}

export default SearchBar;
