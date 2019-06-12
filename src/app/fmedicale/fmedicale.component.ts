import { Component, OnInit } from '@angular/core';
import { FmedicaleService } from '../fmedicale.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fmedicale',
  templateUrl: './fmedicale.component.html',
  styleUrls: ['./fmedicale.component.css']
})
export class FmedicaleComponent implements OnInit {

  constructor(private service: FmedicaleService, private router: ActivatedRoute) { }
    enfant = {
        idEnf: 0
    }

   fmedicale = {
        allergies: '',
        antecedents: ''

    };

  ngOnInit() {
      this.enfant.idEnf = this.router.snapshot.params['idEnf'];

          }



  fmedicaleEnf()   {this.service.fMedicale(this.enfant.idEnf, this.fmedicale).subscribe(data => {
          this.fmedicale.allergies = data['allergies'];
          this.fmedicale.antecedents = data['antecedents'];
      });

}
}