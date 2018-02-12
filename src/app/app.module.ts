import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [   //appel des composants
    AppComponent,
    LoginComponent,
    AccueilComponent,
    FeaturesComponent
  ],
  imports: [  //appel des modules
    BrowserModule, 
    NgModule, 
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
