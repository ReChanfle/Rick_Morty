const axios = require('axios');


function getCharById(res,id){


   
      
   /* axios(`https://rickandmortyapi.com/api/character/${id}`).then((response)=> {
        console.log(response)
    }
   // .then((data)=> {
    //    console.log(data);
   // }
   
    ).catch((err)=>{

}); */

fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response)=> response.json())
    .then((data) => {
       
        res.writeHead(200,{ 'Content-type':'application/json' }).end(JSON.stringify(data));
      
    })
    .catch((err) => {
        
      //  res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(500,{ 'Content-type':'text/plain' }).end(JSON.stringify(err.message));
      
    });

    
   
 

}


module.exports =  getCharById
