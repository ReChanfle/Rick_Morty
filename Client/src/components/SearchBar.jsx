import React, { useState } from 'react';
import '../css/Nav.css';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

  function handleChange(event) {
   console.log("input value ", event.target.value);
    setId(event.target.value);
  }

  function randomId () { return Math.round(Math.random()*20);} 

   return (
       <>
          <input class="inputs" role="search" onChange={handleChange} type="search" name="search" value={id} placeholder="Ingresa un personaje.." />
        
         <a  onClick={() => onSearch(id)}>Add</a> 
         <a   onClick={() => onSearch(randomId())}>Random</a>
         </>
   );
}
