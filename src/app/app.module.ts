import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApontamentoCrudComponent } from './apontamento-crud/apontamento-crud.component';
import { RegistroComponent } from './registro/registro.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ApontamentoCrudComponent,
    RegistroComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
