

var favorites = [];

function postFav(req,res)
{
        let alreadyOn = false;
        favorites.find((e)=>{
            if(e.id===req.body.id)
                alreadyOn =true;
        })

        if(alreadyOn)
            res.status(204).json(favorites);
            else
            {
                favorites.push(req.body);
                res.status(200).json(favorites);
            }

}

function deleteFav(req,res)
{
        
        

       let char = favorites.find((e)=> e.id===req.body.id);
            
        favorites = favorites.filter((e)=> e.id!==char.id);
           
        if(char)
            res.status(200).json(char.id);
            else
            res.status(204).json({error:"no existe id"});
       
    
}

module.exports = {
    postFav,
    deleteFav
}