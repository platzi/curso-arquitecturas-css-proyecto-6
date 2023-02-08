import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonTeamComponent } from './components/pokemon-team/pokemon-team.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPokemonButtonComponent } from './components/search-pokemon-button/search-pokemon-button.component';
import { CapturePokemonButtonComponent } from './components/capture-pokemon-button/capture-pokemon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    SearchBarComponent,
    PokemonTeamComponent,
    SearchPokemonButtonComponent,
    CapturePokemonButtonComponent
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
