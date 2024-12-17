import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from './models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sito-pokemon';
  obs!:Observable<Root>;
    dati :any
  constructor(private http: HttpClient){
    
    this.obs = this.http.get<Root>('https://pokeapi.co/api/v2/type')
    this.obs.subscribe(this.ciao)
    
  }
  ciao=(data:any)=>{
    this.dati = data
  }
  }

