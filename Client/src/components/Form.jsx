import { useState } from "react";
import validate from "../validation";

export default function Form({login})
{
        const [errors,setErrors] = useState({});

        const [user,setData] = useState({
            email: '',
            password : ''
         }
         );

         function handleChange(event)
        {
            setData({
                ...user,
                [event.target.name] : event.target.value,
            }
              
            );

          

        }
        function handleSubmit(event)
        {
            event.preventDefault();

            fetch(`http://localhost:3001/login?email=${user.email}&password=${user.password}`,{method: "POST"}).then((response)=> response.json())
            .then((data) => {
               console.log(data);
                if(data.access)
                    login(user);
           
             }).catch((error)=>{
                    console.log(error.message);
            });

              
               


        }


        return(
           /* <form className='container' onSubmit={handleSubmit}>
                <label>Password</label>
                    <input onChange={handleChange} type="password" name="password" value={user.password}/>
                    {validate(user.email,user.password).password ? <p>Valido</p> : <p>Error</p> }
                <label>Email</label>
                    <input onChange={handleChange} type="email" name="email" value={user.email} />
                    {validate(user.email,user.password).email ? <p>Valido</p> : <p>Error</p> }

                    {validate(user.email,user.password).password && validate(user.email,user.password).email 
                        ?    <button type="submit" class="btn btn-primary">Ingresar</button> : <p>No se puede ingresar</p> }

              
            </form> */
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                  
                    </div>
                    <div class="col mt-5 ">
                     
                    <form  class="mb-5 bg-dark text-white  "  onSubmit={handleSubmit}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif" class="img-fluid" alt="..."/>
                        <div class="mb-3 m-2" >
                            <label  class="form-label fs-2">Email</label>
                            <input  class="form-control bg-dark text-white"  aria-describedby="emailHelp" onChange={handleChange} type="email" name="email" value={user.email}/>
                            {validate(user.email,user.password).email  ?  null : <div class="mt-1 alert alert-warning" role="alert">Must be a valid email</div> }
                           
                        </div>
                        <div class="mb-3 m-2">
                            <label class="form-label fs-2">Password</label>
                            <input type="password" class="form-control bg-dark text-white"  onChange={handleChange} name="password" value={user.password}/>
                            {validate(user.email,user.password).password ? null : <div class="mt-1 alert alert-warning" role="alert">Password must have @ upperscase letters and numbers</div> }
                        </div>
                        
                        {validate(user.email,user.password).password && validate(user.email,user.password).email 
                        ?    <button type="submit" class="btn btn-success m-2">Ingresar</button> : <button disabled class="btn btn-success m-2">Ingresar</button> }
                    </form>
                    </div>
                    <div class="col">
                    
                    </div>
                </div>
            </div>
            
               
                   
                
               


        )


}