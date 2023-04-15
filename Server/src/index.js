const express = require('express');
const router = require('./routes/index');
const server = express();
const PORT = 3001;
const morgan = require('morgan');


server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
        res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
        res.header('Access-Control-Allow-Headers', '*'); //Autorizo recibir solicitudes con dichos hedears
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
        next();
    });


server.use(morgan('dev'));

//middleware para recibir json desde el front (req.body)
server.use(express.json());

server.use('/',router);

/* server.get('/detail/:id',(req,res)=>{

      getCharById(req,res);

});

server.post(router.,(req,res)=>{

        login(req,res);

});


server.put('/fav',(req,res)=>{

        postFav(req,res);

});

server.delete('/fav',(req,res)=>{

        deleteFav(req,res);

}); */



server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});



























/*var http = require("http");
const  getCharById  = require("./controlllers/getCharById.js");
const axios = require('axios');

        const PORT = 3001;

const newServer = http.createServer((req, res)=>{ 

        res.setHeader('Access-Control-Allow-Origin', '*');
	console.log(`Server raised in port ${PORT}`);

        let id = req.url.split("/").pop();
       
      
        
    if(req.url===`/detail/${id}`)   getCharById(res,id);
    
     
        
 });


 newServer.listen(PORT, 'localhost');

 module.exports =
 newServer; 
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
 