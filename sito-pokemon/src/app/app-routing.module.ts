import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { GenericComponent } from './generic/generic.component';
import { DettagliComponent } from './dettagli/dettagli.component';

const routes: Routes = [
{path:"", component: ListaComponent},
{path:"type/:id", component:GenericComponent},
{path:"pokemon/:name", component:DettagliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
