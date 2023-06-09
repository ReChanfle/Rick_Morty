import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { addFav, removeFav } from "../redux/actions";
import '../css/Card.css';
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
        
           //console.log(character)
         fetch(`http://localhost:3001/fav`,{method:"PUT",headers: { 'Content-Type': 'application/json' },body:JSON.stringify(character)}).then((response)=> response.json())
               .then((data)=> 
                  {
                   
                     dispatch(addFav(data))
                  }
               
     )

      
      }
    
      function  remove () {
         fetch(`http://localhost:3001/fav`,{method:"DELETE",headers: { 'Content-Type': 'application/json' },body:JSON.stringify(character)}).then((response)=> response.json())
               .then((data)=> 
               {
                 
                  dispatch(removeFav(data))
               }
             
     )
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
       /*  <div key={character.id}>
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
         </div>  */

       
            <div class="container" >
            <div class="wrapper" key={character.id}>
               <div class="banner-image"> 
              <img src={character.image} alt='img_profile' /> 
               </div>
               {
            isFav ? (
               <img src="https://cdn-icons-png.flaticon.com/512/210/210545.png" style={imgStyle} role="button" onClick={handleFavorite}/>
                   ) : (
               <img  src="https://cdn-icons-png.flaticon.com/512/10037/10037207.png"  style={imgStyle} role="button" onClick={handleFavorite}/>
                  )
            }        <h1>{character.name}</h1>
                  <p>{character.status}</p>
                     <p>{character.species}</p>
                        <p>{character.gender}</p>
                         <p>{character.origin.name}</p>
            </div>
            <div class="button-wrapper"> 
           
           <Link to={`/detail/${character.id}`}>
                      <button class="btn outline">Details</button>
                  </Link>
                  {
                      onClose && <button class="btn fill"  onClick={()=> onClose(character.id)}>DELETE</button>
                  }
            
            </div>
         </div>
          
            



        /*  <div  style={divStyle}  key={character.id}>
           {
            isFav ? (
               <img src="https://cdn-icons-png.flaticon.com/512/210/210545.png" style={imgStyle} role="button" onClick={handleFavorite}/>
                   ) : (
               <img  src="https://cdn-icons-png.flaticon.com/512/10037/10037207.png"  style={imgStyle} role="button" onClick={handleFavorite}/>
                  )
            }     
               <img src={character.image}  alt='img_profile'/>
               <div >
                  <h5 >{character.name}</h5>
                  <p >{character.species}</p>
                  <Link to={`/detail/${character.id}`}>
                     <a  >Details</a>
                  </Link>
                  <button  onClick={()=> onClose(character.id)}>Delete</button>
               </div>
            </div>  */
      );
   

}


  // <button onClick={this.props.onClose()}>X</button>