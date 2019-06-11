import { Component, OnInit } from '@angular/core';
import {EnfantService } from '../enfant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-resp',
  templateUrl: './page-resp.component.html',
  styleUrls: ['./page-resp.component.css']
})
export class PageRespComponent implements OnInit {

    listEnfants: any;
  constructor(private service: EnfantService, private router: Router) { }


  ngOnInit() {this.service.ListEnfants().subscribe(data => {this.listEnfants = data;
    }, err => {
            console.log(err);
        });
  }
 versfMedicale(idEnf: number) {
    this.router.navigate(['/fmedicale/' + idEnf]);
 }
versfPrincipal(idEnf: number) {
    this.router.navigate(['/fprincipal/' + idEnf]);
}
versfImage(idEnf: number) {
    this.router.navigate(['/fimage/' + idEnf]);
}
versfVaccination(idEnf: number) {
    this.router.navigate(['/vaccination/' + idEnf]);
}
}
