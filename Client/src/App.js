import './css/App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import React, { useState,useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Error from './components/Error';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { getCharacters} from './redux/actions';
import { useDispatch,useSelector } from 'react-redux';

function App() {

             
      let ready = false;

      const [characters,setCharacters] = useState([]);

      const location = useLocation();

      const navigate = useNavigate();

      const [access, setAccess] = useState(false);

      const EMAIL = 'sebascabeza1991@gmail.com';
      const PASSWORD = '@Model101';

      //redux funcional
      const dispatch = useDispatch();

    //hook use bselector
      const favorites = useSelector((state)=>
      state.myFavorites
   );


      useEffect(() =>{
        
         dispatch(getCharacters());
      },[]);


      

    
      const character = useSelector((state)=>
         state.characters
      );

   
      console.log("favs",favorites);
      
function login(userData) 
{
         if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
         }
}

function logOut(user)
{  
      setAccess(user);

}



function onSearch(id)
{


           
   let exist = characters.find((e)=> e.id==id ? true : false)
   let finded = false;

          if(character.results)
          {
           
             character.results.filter((e) => 
             {
                
                  if(e.id==id && !exist)
                  {
                     setCharacters((characters) => [...characters, e]);
                     finded = true;
                  }
                 
             }
            )
          }
      
           if(exist)
          {

            const divAlert = document.createElement('a');
            divAlert.setAttribute('id','alert');
            divAlert.textContent = "Already on display";
            const search = document.getElementById('myTopnav');
            if(!document.getElementById('alert'))
            search.appendChild(divAlert);

               
               setTimeout(()=>{
                  if(search.contains(divAlert))
                  search.removeChild(divAlert);
               },3000)
          }
          if(!finded && !exist)
          {
            const divAlert = document.createElement('a')
            divAlert.setAttribute('id','alert');
            divAlert.textContent = "Character not found";
         
            const search = document.getElementById('myTopnav');
           if(!document.getElementById('alert'))
            search.appendChild(divAlert);
               
               setTimeout(()=>{
                  if(search.contains(divAlert))
                  search.removeChild(divAlert);
               },2500)
          }
       
    
     
}

function onClose(id)
{
      
       //  const newChars = characters.filter(e => e.id!==id);
       
         //setCharacters(
           // (characters) =>  {return [newChars] } );
        //bug con favorites 
            setCharacters((characters) => {
               return characters.filter((ch) => ch.id !== id);
             });


}

useEffect(() => {

   !access && navigate('/');
}, [access]);

function handlePagination (event){
     
         let nextPage = character.info.next;
         let prevPage = character.info.prev;

         //console.log(event.target.name)

         console.log(resultTest);

         if(event.target.name==='prev')
         {
            let resultToDispatch;
               if(character.info.prev)
                resultToDispatch = character.info.prev[character.info.prev.length-1];
                else
                resultToDispatch = 0;

         
          
         }
           
       
         if(event.target.name==='next')
         {
            let resultToDispatch;
               if(character.info.next)
                resultToDispatch =character.info.next[character.info.next.length-1];
                else
                resultToDispatch = 0;
                
            
        
         }
         /* <button onClick={handlePagination} name='prev'>PREV</button>
            <button onClick={handlePagination} name='next'>NEXT</button> */

}


   return (
      <div className='App'>
         {access ? <Nav onSearch={onSearch}  logOut={logOut} access={access}/> : null }
      <Routes>
             <Route path="/" element={<Form login={login} />}/>
            <Route path="/home" element={ <Cards  characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/favorites" element={<Favorites favorites={favorites} onClose={onClose}/>}/>
            <Route path="/detail/:id" element={ <Detail characters={characters} />}/>
            <Route path="*" element={<Error />} />
      </Routes>
   
          
      </div>
   );
}

export default App
