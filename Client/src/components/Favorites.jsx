import Card from "./Card"
import { filterCards,orderCards,original } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
export default function Favorites({favorites,onClose})
{
    const [aux,setAux] = useState(false);
  
    useEffect(()=>{
        return ()=> dispatch(original());
     },[])

    const dispatch = useDispatch();

    function handleOrder(event)
    {
        event.preventDefault();
            dispatch(orderCards(event.target.value));
            setAux(!aux);


    }
    function handleFilter(event)
    {
                    
                    if(event.target.value!=="All")
                    dispatch(filterCards(event.target.value));
                    else if(event.target.value==="All")
                    dispatch(original());
                
    }

    return(
        <div class="container" >
         
                
                <div class="row ">
                    <div class="col">
                    </div>
                    <div class="col-sm ">
                       
                        <select  class="form-select bg-dark text-white mt-2 "   onChange={handleOrder}>
                            <option  value="A">Ascendente</option>
                            <option value="D">Descendente</option>
                        </select>
                       
                      
                    </div>
                    <div class="col-sm">
                      
                        <select  class="form-select  bg-dark text-white mt-2 "   onChange={handleFilter}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Genderless">Genderless</option>
                            <option value="unknown">unknown</option>
                            <option value="All">All</option>
                        </select>
                      
                       
                    </div>
                    <div class="col">
                    </div>
                </div>
            
           
            <div class="container text-center">
                <div class="row row-cols-3">
                    { 
                        favorites && favorites.map((charactersItem,index,characters) => 
                        {return <Card key={characters[index].id} character={charactersItem} onClose={onClose}></Card>})
                    } 
                </div>
        
            </div>
        </div>
    )

}