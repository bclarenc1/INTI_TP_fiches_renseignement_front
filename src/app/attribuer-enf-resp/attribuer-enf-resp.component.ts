import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../enfant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attribuer-enf-resp',
  templateUrl: './attribuer-enf-resp.component.html',
  styleUrls: ['./attribuer-enf-resp.component.css']
})
export class AttribuerEnfRespComponent implements OnInit {

 constructor(private service: EnfantService, private router: ActivatedRoute) { }
    resp = {
        idResp: 0
    }

   enfant = {
        prenomEnf: '',
        nomEnf: '',
        ageEnf: 0

    };

  ngOnInit() {
      this.resp.idResp = this.router.snapshot.params['idResp'];

          }



  attribuerEnfantResp()   {this.service.attribuerEnfantResp(this.resp.idResp, this.enfant).subscribe(data => {
          this.enfant.prenomEnf = data['prenomEnf'];
          this.enfant.nomEnf = data['nomEnf'];
          this.enfant.ageEnf = data['ageEnf'];
      });

}

}
