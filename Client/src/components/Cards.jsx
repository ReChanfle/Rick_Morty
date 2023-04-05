
import Card from "./Card";

export default function Cards({characters,onClose}) {
   //se trabaja con constructor cuando se usa state. Los componentes de función capturan los valores renderizados.
      // no hay constructos en funcitonal clase
  

   return(
    

         <div class="container text-center">
         <div class="row row-cols-3">
         {console.log(characters)}
                  {characters.map((charactersItem,index,characters) => 
                  {return <Card key={characters[index].id} character={charactersItem} onClose={onClose}></Card>})}
         </div>
         </div>
               
      
         
    
      
   )
   
  
 
}


// <Card key={characters[index].id} props={characters[index]}></Card>