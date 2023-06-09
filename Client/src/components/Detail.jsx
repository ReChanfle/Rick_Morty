import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Card.css';

export default function Detail()
{
    const {id}= useParams();
    const [character,setCharacter] = useState([]);
               
        
                useEffect(() => {
                    (async function () {
                        
                        const response = await fetch(`http://localhost:3001/detail/${id}`);
                        const responseJson = await response.json();

                        try{
                            if(responseJson.name) {
                                setCharacter(responseJson);
                             }
                        }
                        catch(err)
                        {
                            console.log(err.message);
                        }
                    })();
                   
                  
                  /* fetch(`http://localhost:3001/detail/${id}`).then((response)=>response.json())
                    .then((data)=> {
                        else {
                            window.alert('No hay personajes con ese ID');
                         }
                    }
                   
                    ).catch((err)=>{
                        console.log(err.message)
                    }) */
                    return setCharacter({});
                 }, [id]); 

                
              
    

                 const styleLogo = {
                    width: '65px',
                    heigth: '65px'
                  }
     
     

     
        if(character.name)
            {
                 return (
                    <div >
                      
                        <div class="container">
                            <h1>{character.name}</h1>
                            <p > This Character is from {character.origin.name} his name is {character.name} and his species is {character.species} </p>
                            <Link  to="/home">
                                <img src="https://cdn-icons-png.flaticon.com/512/391/391123.png" style={styleLogo}/> 
                            </Link>
                        </div>
                    </div>
                   
                     );
            }
  



}

 /* let char = {};

            console.log(characters);

                if(characters.length>0)
                {
                    char = characters.filter((char) => {if(char.id==id) return char;});

                         char = char[0];
                
                }
                else
                {

                    //location redirect
                    char ={
                        id: '',
                        name: '',
                        status: '',
                        species: '',
                        gender: '',
                        origin: {
                           name: '',
                           url: '',
                        },
                        image: '',
                    }   
                } */