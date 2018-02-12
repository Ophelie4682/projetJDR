import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './features/features.component';

export const router: Routes = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full'},     //route automatique pour rediriger si il n'y a rien dans l'url
    { path: 'accueil', component: AccueilComponent },
    { path: 'login', component: LoginComponent },    //component appelle la Classe
    { path: 'features', component: FeaturesComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);