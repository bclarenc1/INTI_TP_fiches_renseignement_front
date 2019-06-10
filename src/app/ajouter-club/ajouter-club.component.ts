import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-ajouter-club',
  templateUrl: './ajouter-club.component.html',
  styleUrls: ['./ajouter-club.component.css']
})
export class AjouterClubComponent {

    club = {
        discipline: ''
    };

  constructor(private service: ClubService) { }

  addClub()   {this.service.addClub(this.club).subscribe(data => {
          this.club.discipline = '';
      });

}
}