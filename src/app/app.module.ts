import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ListerClubComponent } from './lister-club/lister-club.component';
import { ModfierClubComponent } from './modfier-club/modfier-club.component';
import { AjouterEcoleComponent } from './ajouter-ecole/ajouter-ecole.component';
import { ListerEcoleComponent } from './lister-ecole/lister-ecole.component';
import { ModifierEcoleComponent } from './modifier-ecole/modifier-ecole.component';
import { AjouterCentredeloisirComponent } from './ajouter-centredeloisir/ajouter-centredeloisir.component';
import { ModifierCentredeloisirComponent } from './modifier-centredeloisir/modifier-centredeloisir.component';
import { ListerCentredeloisirComponent } from './lister-centredeloisir/lister-centredeloisir.component';
import { AjouterResplegalComponent } from './ajouter-resplegal/ajouter-resplegal.component';
import { ModifierResplegalComponent } from './modifier-resplegal/modifier-resplegal.component';
import { ListResplegalsComponent } from './list-resplegals/list-resplegals.component';
import { PageRespComponent } from './page-resp/page-resp.component';
import { FmedicaleComponent } from './fmedicale/fmedicale.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { FprincipaleComponent } from './fprincipale/fprincipale.component';
import { FimageComponent } from './fimage/fimage.component';

// ++++++++++++++++++++ A modifier +++++++++++++++++++++++++

const appRoutes: Routes = [
    {path: 'page-resp', component: PageRespComponent},
   // {path: '', redirectTo: '/listClubs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListerClubComponent,
    ModfierClubComponent,
    AjouterEcoleComponent,
    ListerEcoleComponent,
    ModifierEcoleComponent,
    AjouterCentredeloisirComponent,
    ModifierCentredeloisirComponent,
    ListerCentredeloisirComponent,
    AjouterResplegalComponent,
    ModifierResplegalComponent,
    ListResplegalsComponent,
    PageRespComponent,
    FmedicaleComponent,
    VaccinationComponent,
    FprincipaleComponent,
    FimageComponent
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
