import React, { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

  function handleChange(event) {
   console.log("input value ", event.target.value);
    setId(event.target.value);
  }

  function randomId () { return Math.round(Math.random()*20);} 

   return (
      <div class="d-flex" role="search" >
          <input onChange={handleChange} type="search" name="search" class="form-control m-2 bg-dark text-white" value={id} placeholder="Ingresa un personaje.." />
        
         <button  class=" m-2 btn btn-dark" onClick={() => onSearch(id)}>Add</button> 
         <button  class=" m-2 btn btn-dark" onClick={() => onSearch(randomId())}>Random</button>
      </div>
   );
}
