import Card from "./Card";
import '../css/Cards.css';

export default function Cards({characters,onClose}) {
   //se trabaja con constructor cuando se usa state. Los componentes de función capturan los valores renderizados.
      // no hay constructos en funcitonal clase
  

   return(
    

         <div >
         <div class='cards'>
         {console.log(characters.results)}
                  {characters.map((charactersItem,index,characters) => 
                  {return <Card key={characters[index].id} character={charactersItem} onClose={onClose}></Card>})}
                  

       
         </div>
         </div>
               
      
         
    
      
   )
   
  
 
}


// <Card key={characters[index].id} props={characters[index]}></Card>