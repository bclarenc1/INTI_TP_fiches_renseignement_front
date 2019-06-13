import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FmedicaleComponent } from './fmedicale/fmedicale.component';
import { FimageComponent } from './fimage/fimage.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { FprincipaleComponent } from './fprincipale/fprincipale.component';
import { PageRespComponent } from './page-resp/page-resp.component';

import { AttribuerEnfRespComponent } from './attribuer-enf-resp/attribuer-enf-resp.component';

const routes: Routes = [
    {path: 'fmedicale/:idEnf', component: FmedicaleComponent},
    {path: 'fimage/:idEnf', component: FimageComponent},
    {path: 'fprincipale/:idEnf', component: FprincipaleComponent},
    {path: 'vaccination/:idEnf', component: VaccinationComponent},
    {path: 'page-resp', component: PageRespComponent},
    {path: 'attribuer-enf-resp', component: AttribuerEnfRespComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
