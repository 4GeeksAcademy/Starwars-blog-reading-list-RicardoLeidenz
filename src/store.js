export const initialStore=()=>{
  return{
    baseURL: "https://www.swapi.tech/api/",
    people: [],
    planets: [],
    vehicles:[],
    details: {},
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    //Sets value of list of people after an API request
    case 'set-people':
      return{
        ...store,
        people: action.payload
      }
    //Sets value of list of planets after an API request
    case 'set-planets':
      return{
        ...store,
        planets: action.payload
      }
    //Sets value of list of vehicles after an API request
    case 'set-vehicles':
      return{
        ...store,
        vehicles: action.payload
      } 
    //Sets value of details of a Details page
    case 'set-details':
      return{
        ...store,
        details: action.payload
      } 
    //Add a new favorite to the list pf favorites
    case 'set-favorite':
      return{
        ...store,
        favorites: [...store.favorites, action.payload]
      } 
    //Updates the list of favorites mainly when one is deleted
    case 'set-favorites':
      return{
        ...store,
        favorites: action.payload
      } 
    default:
      throw Error('Unknown action.');
  }    
}
