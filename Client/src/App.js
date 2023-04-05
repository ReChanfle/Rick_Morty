import './App.css';
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
import { getCharacters } from './redux/actions';
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
      state
   );
  
    
            
      useEffect(() =>{
               
         dispatch(getCharacters());
      },[]);

    
      const character = useSelector((state)=>
         state.characters
      );


      
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

            const divAlert = document.createElement('div')
            let buttonAlert = document.createElement('button');
            buttonAlert.className = 'btn-close';
            buttonAlert.setAttribute('data-bs-dismiss','alert');
            buttonAlert.setAttribute('type','button');
            buttonAlert.setAttribute('aria-label','Close');
            
            divAlert.className = 'alert alert-success alert-dismissible fade show';
            divAlert.setAttribute('role','alert');
            divAlert.textContent = "Already on display";
            divAlert.appendChild(buttonAlert);
            const search = document.getElementById('alertSearch');
            if(search.childNodes.length===0)
            search.appendChild(divAlert);

               
               setTimeout(()=>{
                  if(search.contains(divAlert))
                  search.removeChild(divAlert);
               },3000)
          }
          if(!finded && !exist)
          {
            const divAlert = document.createElement('div')
            let buttonAlert = document.createElement('button');
            buttonAlert.className = 'btn-close';
            buttonAlert.setAttribute('data-bs-dismiss','alert');
            buttonAlert.setAttribute('type','button');
            buttonAlert.setAttribute('aria-label','Close');
            
            divAlert.className = 'alert alert-danger alert-dismissible fade show';
            divAlert.setAttribute('role','alert');
            divAlert.textContent = "Character not found";
            divAlert.appendChild(buttonAlert);
            const search = document.getElementById('alertSearch');
            if(search.childNodes.length===0)
            search.appendChild(divAlert);

               
               setTimeout(()=>{
                  if(search.contains(divAlert))
                  search.removeChild(divAlert);
               },2500)
          }
       
    
     
}

function onClose(id)
{
        console.log(id)
       //  const newChars = characters.filter(e => e.id!==id);
       
         //setCharacters(
           // (characters) =>  {return [newChars] } );

            setCharacters((characters) => {
               return characters.filter((ch) => ch.id !== id);
             });


}

useEffect(() => {

   !access && navigate('/');
}, [access]);




   return (
      <div className='App'>
         {access ? <Nav onSearch={onSearch}  logOut={logOut} access={access}/> : null }
      <Routes>
             <Route path="/" element={<Form login={login} />}/>
            <Route path="/home" element={ <Cards  characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/favorites" element={<Favorites favorites={favorites.myFavorites} onClose={onClose}/>}/>
            <Route path="/detail/:id" element={ <Detail characters={characters} />}/>
            <Route path="*" element={<Error />} />
      
      </Routes>
            
          
      </div>
   );
}

export default App
