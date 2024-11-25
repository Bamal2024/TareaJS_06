//Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego. 

let pokemon = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];

const pokemonFuego = pokemon.filter(poke => poke.tipo === 'Fuego');
console.log("Pokémon tipo Fuego:", pokemonFuego);
