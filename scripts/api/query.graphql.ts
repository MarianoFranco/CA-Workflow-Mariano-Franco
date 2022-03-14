export const query = `query{
    pokemons(limit:50){
        results{
        name
        image
        id
        url
        }   
    }  
}`;