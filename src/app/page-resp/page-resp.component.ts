import { Component, OnInit } from '@angular/core';
import {EnfantService } from '../enfant.service';
import { Router } from '@angular/router';
import { ResplegalService } from '../resplegal.service';

@Component({
  selector: 'app-page-resp',
  templateUrl: './page-resp.component.html',
  styleUrls: ['./page-resp.component.css']
})
export class PageRespComponent implements OnInit {

    listEnfants: any;
    pageRespLegals: any;
  constructor(private service: EnfantService, private servicer: ResplegalService, private router: Router) { }


  ngOnInit() {this.service.ListEnfants().subscribe(data => {this.listEnfants = data;
    }, err => {
            console.log(err);
        });
    this.servicer.ListRespLegals().subscribe(data => {this.pageRespLegals = data;
    }, err => {
            console.log(err);
        });
  }
 versfMedicale(idEnf: number) {
    this.router.navigate(['/fmedicale/' + idEnf]);
 }
versfPrincipale(idEnf: number) {
    this.router.navigate(['/fprincipale/' + idEnf]);
}
versfImage(idEnf: number) {
    this.router.navigate(['/fimage/' + idEnf]);
}
versfVaccination(idEnf: number) {
    this.router.navigate(['/vaccination/' + idEnf]);
}
versAttribuerEnfResp(idResp: number) {
    this.router.navigate(['/attribuer-enf-resp/' + idResp]);
}
versModifierRespLegal(idEnf: number, idResp: number) {
    this.router.navigate(['/ModifierAttributionEnf/' + idEnf + idResp]);
}}