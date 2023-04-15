const users = require('../utils/users');

function login (req,res){

    const {email,password} = req.query;

    let checked = users.find((e)=> e.email===email && e.password===password);

    

    if(checked)
        res.status(200).json({access: true});
        else
        res.status(404).json({access:false});


       

}


module.exports = login