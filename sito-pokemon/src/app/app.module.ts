import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { GenericComponent } from './generic/generic.component';
import { FormsModule } from '@angular/forms';
import { DettagliComponent } from './dettagli/dettagli.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    GenericComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
