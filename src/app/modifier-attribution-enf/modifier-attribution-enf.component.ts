import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../enfant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-attribution-enf',
  templateUrl: './modifier-attribution-enf.component.html',
  styleUrls: ['./modifier-attribution-enf.component.css']
})
export class ModifierAttributionEnfComponent implements OnInit {

  constructor(private service: EnfantService, private router: ActivatedRoute) { }
    resp = {
        idResp: 0
    }

   enfant = {
        idEnf: 0
    };

  ngOnInit() {
      this.enfant.idEnf = this.router.snapshot.params['idEnf'];

          }



  modifierAttributionEnfantResp()   {this.service.attribuerEnfantResp(this.resp.idResp, this.enfant).subscribe(data => {
         
          this.resp.idResp = data['idResp'];
      });

}}