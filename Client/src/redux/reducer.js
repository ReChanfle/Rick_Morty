import { ADD_FAV, GET_DATA, REMOVE_FAV,FILTER,ORDER,ORIGINAL,TEST} from "./action-types/action-types";


const initialState = {
    myFavorites: [],
    characters:[],
    allCharacters:[],
   
  };
// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?





 const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAV:
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.myFavorites, action.payload]
        };
      case REMOVE_FAV:
        const result = state.myFavorites.filter((p) => p.id != action.payload);
        return {
          ...state,
          myFavorites: result,
          allCharacters: result
        };
        case GET_DATA:
            return {
              ...state,
              characters: action.payload,
            };
            case FILTER:
                const  resultFilter = state.allCharacters.filter((p) => 
                  p.gender === action.payload 
                 );
              return {
                ...state,
                myFavorites: resultFilter,
              };
              case ORDER:
                const resultOrder = state.myFavorites.sort((a,b) => {
                  if(a.id>b.id && action.payload==="D")
                  return b.id-a.id;
                 if(a.id<b.id && action.payload==="A")
                  return a.id-b.id;
               
                 return 0;

                }); 
               
                return {
                  ...state,
                  myFavorites: resultOrder,
                }; 
                case ORIGINAL:
                  return {
                    ...state,
                    myFavorites: state.allCharacters,
                  };
                 
        default:
            return state;
    }
    
  }

  export default reducer;


  