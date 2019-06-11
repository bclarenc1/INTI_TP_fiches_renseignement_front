import { Component, OnInit } from '@angular/core';
import { FprincipaleService } from '../fprincipale.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fprincipale',
  templateUrl: './fprincipale.component.html',
  styleUrls: ['./fprincipale.component.css']
})
export class FprincipaleComponent implements OnInit {

  constructor(private service: FprincipaleService, private router: ActivatedRoute) { }
    enfant = {
        idEnf: 0
    }

   fprincipale = {
        adresse: '',
        telephone: ''

    };

  ngOnInit() {
      this.enfant.idEnf = this.router.snapshot.params['id'];

          }



  fprincipaleEnf()   {this.service.fPrincipale(this.enfant.idEnf, this.fprincipale).subscribe(data => {
          this.fprincipale.adresse = data['adresse'];
          this.fprincipale.telephone = data['antecedents'];
      });

}

}
