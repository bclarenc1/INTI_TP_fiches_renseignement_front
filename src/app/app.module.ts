import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterClubComponent } from './ajouter-club/ajouter-club.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { ListerClubComponent } from './lister-club/lister-club.component';

// ++++++++++++++++++++ A modifier +++++++++++++++++++++++++

const appRoutes: Routes = [
    {path: 'ajouterClub', component: AjouterClubComponent},
    {path: '', component: },
    {path: '', redirectTo: '/listClubs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AjouterClubComponent,
    ListerClubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
