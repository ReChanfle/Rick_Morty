import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { addFav, removeFav } from "../redux/actions";

export default function  Card({character,onClose}) {

      const [isFav,setFav] = useState(false);

      const dispatch = useDispatch();
            
    
               
      const favorites = useSelector((state)=>
      state.myFavorites
   );
   

   //setea coranzoncito segun si esta en el estado glboal o no
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setFav(true);
         }
      });
   }, [favorites]); 
     

  
      function  add() {
         dispatch(addFav(character));
         
      }
    
      function  remove () {
         dispatch(removeFav(character.id));
      }
     
   


   function handleFavorite()
   {
         if(isFav)
            {
               setFav(false);
               remove();
            }
            else
            {
               setFav(true);
               add();
            }
   }
   const divStyle = {
      width: '18rem',
    };

    const  imgStyle = {
      width: '25px',
      heigth: '25px'
    }
  
      return (
        /* <div key={character.id}>
            {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
                   ) : (
               <button onClick={handleFavorite}>🤍</button>
                  )
            }
            <button onClick={()=> onClose(character.id)}>X</button>
            <Link to={`/detail/${character.id}`}>
               <h3 className="card-name">{character.name}</h3>
            </Link>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin.name}</h2>
            <img src={character.image} alt='img_profile' /> 
         </div> */


          <div class="card text-bg-dark  border-success m-2 " style={divStyle}  key={character.id}>
           {
            isFav ? (
               <img src="https://cdn-icons-png.flaticon.com/512/210/210545.png" style={imgStyle} role="button" onClick={handleFavorite}/>
                   ) : (
               <img  src="https://cdn-icons-png.flaticon.com/512/10037/10037207.png"  style={imgStyle} role="button" onClick={handleFavorite}/>
                  )
            }     
               <img src={character.image} class="card-img-top" alt='img_profile'/>
               <div class="card-body">
                  <h5 class="card-title">{character.name}</h5>
                  <p class="card-text">{character.species}</p>
                  <Link to={`/detail/${character.id}`}>
                     <a  class="btn btn-outline-success">Details</a>
                  </Link>
                  <button class="btn btn-outline-danger ms-2" onClick={()=> onClose(character.id)}>Delete</button>
               </div>
            </div> 
      );
   

}


  // <button onClick={this.props.onClose()}>X</button>