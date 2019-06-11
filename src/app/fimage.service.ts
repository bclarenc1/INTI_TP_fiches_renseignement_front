import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FimageService {

  constructor(private http: HttpClient) { }

   addFimage(fimage) {
      return this.http.post('http://localhost:8080/fimages/', fimage);
  }
}
