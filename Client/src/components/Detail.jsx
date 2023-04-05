import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Detail()
{
    const {id}= useParams();
    const [character,setCharacter] = useState([]);

   
                useEffect(() => {
                    fetch(`http://localhost:3001/detail/${id}`).then((response)=> response.json())
                    .then((data)=> {
                        if(data[0].name) {
                            setCharacter(data[0]);
                         } else {
                            window.alert('No hay personajes con ese ID');
                         }
                    }
                   
                    )
                    return setCharacter({});
                 }, [id]);
              
    

                 const styleLogo = {
                    width: '65px',
                    heigth: '65px'
                  }
     
     

     
        if(character.name)
            {
                 return (
                    <div class="card text-center bg-dark text-white m-3">
                        <div class="card-header">
                            <ul class="nav nav-pills card-header-pills">
                            
                            </ul>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{character.name}</h5>
                            <p class="card-text"> This Character is from {character.origin.name} his name is {character.name} and his species is {character.species} </p>
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