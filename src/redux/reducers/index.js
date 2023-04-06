// qui definiamo la nostra funzione pure che sarà il nostro REDUCER principale
// il REDUCER prende lo stato corrente dell'applicazione nel momento in cui viene "risvegliato", e prende anche l'ACTION che gli arriva con un DISPATCH
// a quel punto nel leggerà il TYPE e con queste due informazioni genererà il nuovo stato globale dell'applicazione

// cominciamo definendo lo stato iniziale
// lo stato iniziale è quello che viene generato ad ogni refresh del browser, per poi essere modificato di nuovo (in maniera immutabile)
// il reducer è una pure function (funzione pura) quindi non modificherà mai i suoi parametri direttamente
const initialState = {
  mainSearch: {
    query: "",
    jobs: [],
  },
  favourites: {
    content: [],
  },
}

// State di MainSearch
// const [query, setQuery] = useState("");
// const [jobs, setJobs] = useState([]);

// 
const mainReducer = (state = initialState, action) => {
  // da questa funzione in ogni caso o situazione dovremo per forza ritornare il nuovo stato globale dell'app
  switch (action.type) {

    case "ALL_JOBS":
      return {
        ...state,
        mainSearch: {
          ...state.mainSearch,
          jobs: action.payload,
        }
      };

    case "SEARCH_QUERY":
      return {
        ...state,
        mainSearch: {
          ...state.mainSearch,
          query: action.payload,
        }
      };

    case "ADD_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        }
      };

      case "DELETE_FAVOURITES":
        return {
          ...state,
          favourites: {
            ...state.favourites,
            content: [...state.favourites.content, action.payload],
          }
        };
  
    default:
      return state;
      // nel caso peggiore, quanto meno, ritorneremo lo stato precedente
      // per ogni chiamata a mainReducer senza rompere il flusso di redux
  }
}
export default mainReducer;