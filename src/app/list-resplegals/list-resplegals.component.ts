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
versAttribuerEnfResp(idResp: number) {
    this.router.navigate(['/attribuer-enf-resp/' + idResp]);
}

}
