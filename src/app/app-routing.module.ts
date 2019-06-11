import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FmedicaleComponent } from './fmedicale/fmedicale.component';
import { FimageComponent } from './fimage/fimage.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { FprincipaleComponent } from './fprincipale/fprincipale.component';

const routes: Routes = [
    {path: 'fmedicale/:idEnf', component: FmedicaleComponent},
    {path: 'fimage/:idEnf', component: FimageComponent},
    {path: 'fprincipale/:idEnf', component: FprincipaleComponent},
    {path: 'vaccination/:idEnf', component: VaccinationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
