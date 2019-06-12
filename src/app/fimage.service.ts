import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FimageService {

  constructor(private http: HttpClient) { }

   fimage(idEnf, fimage) {
      return this.http.post('http://localhost:8080/fimages/' + idEnf, fimage);
  }

    getFmedicale(idEnf) {
      return this.http.get('http://localhost:8080/fimages/' + idEnf);
  }
}
