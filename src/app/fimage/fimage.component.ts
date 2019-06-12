import { Component, OnInit } from '@angular/core';
import { FimageService } from '../fimage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fimage',
  templateUrl: './fimage.component.html',
  styleUrls: ['./fimage.component.css']
})
export class FimageComponent implements OnInit {

 constructor(private service: FimageService, private router: ActivatedRoute) { }
    enfant = {
        idEnf: 0
    }

   fimage = {
        autorisation: ''
    };

  ngOnInit() {
      this.enfant.idEnf = this.router.snapshot.params['idEnf'];

          }

  fimageEnf()   {this.service.fImage(this.enfant.idEnf, this.fimage).subscribe(data => {
          this.fimage.autorisation = data['autorisation'];
      });

}

}
