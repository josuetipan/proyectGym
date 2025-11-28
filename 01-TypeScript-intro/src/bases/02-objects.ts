export const pokemonIds = [1, 20, 30, 40, 50];

interface Pokemon {
  id: number;
  name: string;
  age: number;
}

export const bulbasur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  age: 5,
};

export const charmander: Pokemon = {
  id: 4,
  name: "Charmander",
  age: 3,
};

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasur);
console.log(pokemons);
