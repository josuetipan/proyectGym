import type {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";
import {
  PokeApiAdapter,
  PokeApiFetchAdapter,
  type Httpadapter,
} from "../api/pokeApi.adapter";

export class Pokemon {
  public readonly id: number;
  public name: string;
  private readonly http: Httpadapter;
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }
  constructor(id: number, name: string, http: Httpadapter) {
    this.id = id;
    this.name = name;
    this.http = http;
    // Todo: inyectar dependencias
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves);

    return data.moves;
  }
}
const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApi);
export const pikachu = new Pokemon(4, "Pikachu", pokeApiFetch);

charmander.getMoves();
