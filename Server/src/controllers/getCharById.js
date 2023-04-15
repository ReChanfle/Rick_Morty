
const URL = "https://rickandmortyapi.com/api/character/";

 async function getCharById(req,res){

    const {id} = req.params;

    const response = await fetch(`${URL}+${id}`);

    const responseJson = await response.json();
    try{
        let data  = responseJson;

        if(data)
        {
            var obj = {
                id: data.id,
	            name: data.name,
	            status: data.status,
	            species: data.species,
	            type: data.type,
	            gender: data.gender,
	            origin: {
		            name: data.origin.name,
		            
	                    },
            }
             res.status(200).json(obj);
        }

    }
    catch(error)
    {
        res.status(500).end(error.message);
    }

}
    
module.exports =  getCharById



/*

function getCharById(req,res){

    const {id} = req.params;

    fetch(`${URL}+${id}`).then((response)=> response.json())
        .then((data) => {
           
        if(data)
        {
            var obj = {
                id: data.id,
	            name: data.name,
	            status: data.status,
	            species: data.species,
	            type: data.type,
	            gender: data.gender,
	            origin: {
		            name: data.origin.name,
		            
	                    },
            }
             res.status(200).json(obj);
        }
       
            else
             res.status(204).json({error:"no content"});
    }).catch((error)=>{
         res.status(500).end(error.message);
    });
}


*/






















/*function getCharById(res,id){

fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response)=> response.json())
    .then((data) => {
       
    res.writeHead(200,{ 'Content-type':'application/json' }).end(JSON.stringify(data));
      
    })
    .catch((err) => {
        
    res.writeHead(500,{ 'Content-type':'text/plain' }).end(JSON.stringify(err.message));
      
    });


}


module.exports =  getCharById */
