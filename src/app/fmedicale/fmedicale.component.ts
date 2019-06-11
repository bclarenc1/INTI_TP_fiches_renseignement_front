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

   fmedicale = {
        allergies: '',
        antecedents: ''

    };
id: 0;

  ngOnInit() {
      this.id = this.router.snapshot.params['id'];
      this.service.getFmedicale(this.id).subscribe(
          data => {
              this.fmedicale.allergies = data['allergies'];
              this.fmedicale.antecedents = data['antecedents'];
          }
      )
  }


  fmedicaleEnf()   {this.service.fMedicale(this.id, this.fmedicale).subscribe(data => {
          this.fmedicale.allergies = data['allergies'];
          this.fmedicale.antecedents = data['antecedents'];
      });

}
}