import { useState } from "react";
import validate from "../validation";
import '../css/Form.css';
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
            });

           

          

        }
        function handleSubmit(event)
        {
            event.preventDefault();

            fetch(`http://localhost:3001/login?email=${user.email}&password=${user.password}`,{method: "POST"}).then((response)=> response.json())
            .then((data) => {
           
                if(data.access)
                    login(user);
           
             }).catch((error)=>{
                    console.log(error.message);
            });

              
           


        }
        const styleLogo = {
            width: '160px',
            heigth: '160px'
          }
        const styleError ={
            width: '25px',
            heigth: '25px'
        }

        return(
          /* <form className='Form' onSubmit={handleSubmit}>
                <label>Password</label>
                    <input onChange={handleChange} type="password" name="password" value={user.password}/>
                    {validate(user.email,user.password).password ? <p>Valido</p> : <p>Error</p> }
                <label>Email</label>
                    <input onChange={handleChange} type="email" name="email" value={user.email} />
                    {validate(user.email,user.password).email ? <p>Valido</p> : <p>Error</p> }

                    {validate(user.email,user.password).password && validate(user.email,user.password).email 
                        ?    <button type="submit" class="btn btn-primary">Ingresar</button> : <p>No se puede ingresar</p> }

              
            </form> */
          /*  <div >
                <div >
                    <div >
                  
                    </div>
                    <div >
                     
                    <form    onSubmit={handleSubmit}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif" class="img-fluid" alt="..."/>
                        <div >
                            <label  > Email</label>
                            <input    onChange={handleChange} type="email" name="email" value={user.email}/>
                            {validate(user.email,user.password).email  ?  null : <div class="mt-1 alert alert-warning" role="alert">Must be a valid email</div> }
                           
                        </div>
                        <div >
                            <label >Password</label>
                            <input type="password"  onChange={handleChange} name="password" value={user.password}/>
                            {validate(user.email,user.password).password ? null : <div class="mt-1 alert alert-warning" role="alert">Password must have @ upperscase letters and numbers</div> }
                        </div>
                        
                        {validate(user.email,user.password).password && validate(user.email,user.password).email 
                        ?    <button type="submit" >Ingresar</button> : <button disabled>Ingresar</button> }
                    </form>
                    </div>
                    <div class="col">
                    
                    </div>
                </div>

            <div class="input-container ic2">
                <input id="email" class="input" type="text" placeholder=" " />
                <div class="cut cut-short"></div>
                 <label for="email" class="placeholder">Email</>
            </div>


            </div>*/
            
               
                           
<div class="divForm">
<form class="Form"   onSubmit={handleSubmit}>
     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif" style={styleLogo} alt="..."/>
     
      <div className="input-container ic1">
        <input className="input" id="Email" onChange={handleChange} type="email" name="email" value={user.email} placeholder=" "/>
        {validate(user.email,user.password).email ? <img src="https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png" style={styleError}  alt="valid"/> :<img src="https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsconflicting_93497.png" style={styleError} alt="error"/>  }
        <div className="cut cut-short"></div>
        <label for="Email" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input className="input" id="pass" type="password"   onChange={handleChange} name="password" value={user.password} placeholder=" "/>
        {validate(user.email,user.password).password ? <img src="https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png" style={styleError}  alt="valid"/> : <img src="https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsconflicting_93497.png" style={styleError} alt="error"/>  }
        <div className="cut"></div>
        <label for="pass" className="placeholder">Password</label>
      </div>
      {validate(user.email,user.password).password && validate(user.email,user.password).email 
         ?    <button type="submit" class="submit">Log In</button> :  <button  type="submit" class="submit">Log In</button> }
     
    </form>
</div>                   
 
                            
                            
                            
                
               


        )


}