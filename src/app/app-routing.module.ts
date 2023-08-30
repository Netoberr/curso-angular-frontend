import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: '', redirectTo: '/registro', pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent },
  { path: 'tabela', component: TabelaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }