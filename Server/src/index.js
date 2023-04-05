var http = require("http");
const data = require("./utils/data");
var fs = require("fs");

const PORT = 3001;

 const newServer = http.createServer((req, res)=>{ 

	console.log(`Server raised in port ${PORT}`);

        let id = req.url.slice(-1);
       
        
    if(req.url===`/detail/${id}`)
    {
             const ch  = data.filter((e)=> {
                if(e.id==id)
                    return e;
             });

             res.setHeader('Access-Control-Allow-Origin', '*');
                    //console.log(JSON.stringify(ch));
            if(!ch)
           res.writeHead(404,{ 'Content-type':'text/plain' },"json not found");
             
            res.writeHead(200,{ 'Content-type':'application/json' }).end(JSON.stringify(ch));
  
        
        
    }

    

 });


 newServer.listen(PORT, 'localhost');

 module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  newServer;