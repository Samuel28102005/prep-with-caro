import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
private apiBaseUrl = "http://pokemonapi.co/api/v2/type";
  constructor() { }
}
