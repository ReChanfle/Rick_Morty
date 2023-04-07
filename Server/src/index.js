var http = require("http");
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
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  newServer;