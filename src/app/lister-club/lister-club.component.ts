import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-lister-club',
  templateUrl: './lister-club.component.html',
  styleUrls: ['./lister-club.component.css']
})
export class ListerClubComponent implements OnInit {

    pageClubs: any;
  constructor(private service: ClubService, private router: Router) { }

  ngOnInit() {

      this.service.ListClubs().subscribe(data => {this.pageClubs = data;
    }, err => {
            console.log(err);
        });
  }
   deleteClub(id: number) {
   this.service.deleteClub(id)
     .subscribe(data => this.ngOnInit());
 }

 editClub(id: number) {

    this.router.navigate(["/editClub",id]);
}

}
