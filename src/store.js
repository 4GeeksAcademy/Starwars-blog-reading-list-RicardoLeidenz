export const initialStore=()=>{
  return{
    baseURL: "https://www.swapi.tech/api/",
    people: [],
    planets: [],
    vehicles:[],
    details: {}
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set-people':
      return{
        ...store,
        people: action.payload
      }
    case 'set-planets':
      return{
        ...store,
        planets: action.payload
      }
    case 'set-vehicles':
      return{
        ...store,
        vehicles: action.payload
      } 
    case 'set-details':
      return{
        ...store,
        details: action.payload
      } 
    default:
      throw Error('Unknown action.');
  }    
}
