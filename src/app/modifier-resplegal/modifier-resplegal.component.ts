import { Component, OnInit } from '@angular/core';
import { ResplegalService } from '../resplegal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-resplegal',
  templateUrl: './modifier-resplegal.component.html',
  styleUrls: ['./modifier-resplegal.component.css']
})
export class ModifierResplegalComponent implements OnInit {

 
  constructor(private service: ResplegalService, private router: ActivatedRoute) { }

 respLegal = {
        idResp : 0 ,
        nomResp: '',
        prenomResp: '',

    };
    id: number;
  ngOnInit() {
      this.id = this.router.snapshot.params['id'];
      this.service.getRespLegal(this.id).subscribe(
          data => {
              this.respLegal.nomResp = data['nomResp'];
              this.respLegal.prenomResp = data['prenomResp'];
           
          }
      )
  }

  editRespLegal() {
        
            this.service.editRespLegal(this.id, this.respLegal).subscribe(
                data => {
                    this.respLegal.idResp = data['idResp'];
                    this.respLegal.nomResp = data['nomResp'];
                    this.respLegal.prenomResp = data['prenomResp'];
                }
            );
           
  }

}
