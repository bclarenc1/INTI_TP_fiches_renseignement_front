import { Component, OnInit } from '@angular/core';
import { ResplegalService } from '../resplegal.service';

@Component({
  selector: 'app-ajouter-resplegal',
  templateUrl: './ajouter-resplegal.component.html',
  styleUrls: ['./ajouter-resplegal.component.css']
})
export class AjouterResplegalComponent {

 respLegal = {
        nomResp: '',
        prenomResp: '',

    };

  constructor(private service: ResplegalService) { }

  addRespLegal()   {this.service.addRespLegal(this.respLegal).subscribe(data => {
          this.respLegal.nomResp = '',
           this.respLegal.prenomResp = '';
      });
}
}