import { ADD_FAV,REMOVE_FAV,GET_DATA,ORDER,FILTER,ORIGINAL } from "./action-types/action-types";


// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const addFav = (obj) =>  {
    return {type: ADD_FAV,payload:obj};
};

export const removeFav = (id) =>  {
  return {type: REMOVE_FAV,payload: id};
};


export const getCharacters = () => {
    return function (dispatch)
    {
       fetch(`https://rickandmortyapi.com/api/character/`).then((response)=> response.json())
       .then((data)=> 
            dispatch({type: GET_DATA,payload:data})
       )
    }

}

export const filterCards =(gender) =>{
  return{type:FILTER,payload:gender}

}

export const orderCards =(order) =>{
  return{type:ORDER,payload:order}

}

export const original =() =>{
  return{type:ORIGINAL}

}



