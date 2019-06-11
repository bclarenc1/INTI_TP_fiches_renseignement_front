import { Component, OnInit } from '@angular/core';
import {FvaccinationService } from '../fvaccination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccination', 
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {
    ajour:any;
    idEnf:any;
    fvaccination:any

  constructor(private service: FvaccinationService, private router: Router) { }

 fvacc() {this.service.addFvaccination(this.idEnf, this.fvaccination).subscribe(data => {this.ajour = data;
    }, err => {
            console.log(err);
        });
  }

}
