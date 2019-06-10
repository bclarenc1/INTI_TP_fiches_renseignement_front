import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResplegalService } from '../resplegal.service';

@Component({
  selector: 'app-list-resplegals',
  templateUrl: './list-resplegals.component.html',
  styleUrls: ['./list-resplegals.component.css']
})
export class ListResplegalsComponent implements OnInit {

   pageRespLegals: any;
  constructor(private service: ResplegalService, private router: Router) { }

  ngOnInit() {

      this.service.ListRespLegals().subscribe(data => {this.pageRespLegals = data;
    }, err => {
            console.log(err);
        });
  }


   deleteRespLegal(id: number) {
   this.service.deleteRespLegal(id)
     .subscribe(data => this.ngOnInit());
 }

 editRespLegal(id: number) {

    this.router.navigate(["/editRespLegal",id]);
}
}
