import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  obs!:Observable<Root>
constructor(private http: HttpClient){
  
  this.obs = this.http.get<Root>('https://pokeapi.co/api/v2/type')
  
}
}
