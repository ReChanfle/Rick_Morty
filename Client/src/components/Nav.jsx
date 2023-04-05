import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';


function Nav({onSearch,logOut,access}) {

    
    
     
        function handleSubmit(event)
        {
                event.preventDefault();
                logOut(false);

        }

        const styleLogo = {
          width: '65px',
          heigth: '65px'
        }
        const styleExpandNavLogo ={
          width: '35px',
          heigth: '35px'
        }
       

   return (

      
   
          
          <nav class="navbar navbar-expand-lg bg-dark ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><img src="https://cdn-icons-png.flaticon.com/512/545/545806.png" style={styleExpandNavLogo}/></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link  to="/home">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif" style={styleLogo}/> 
              </Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li class="nav-item">
            <Link to="/favorites">
                <a class=" m-2 btn btn-dark" aria-current="page" >Favs</a>
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/About">
                <a class=" m-2 btn btn-dark" aria-current="page" >About</a>
              </Link>
            </li>
            <li class="nav-item" id="alertSearch">

            </li>
          </ul>
            <SearchBar onSearch={onSearch} />
            <form  class="d-flex"   role="search" onSubmit={handleSubmit}>
                          <button class=" m-2 btn btn-outline-warning" type="submit">Logout</button>
                      </form>  
        </div>
      </div>
    </nav>
   );
}

export default Nav;
