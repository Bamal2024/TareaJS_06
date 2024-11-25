/*Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas. 
let pokemon =['Pikachu', 'Charmander','Bulbasaur','Squirtle']*/

const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];

const pokemonMayuscula = pokemons.map(nombre => nombre.toUpperCase());
console.log("Pokémon en mayúsculas:", pokemonMayuscula);
