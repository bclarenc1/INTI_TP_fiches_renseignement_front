import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FmedicaleService {

  constructor(private http: HttpClient) { }

   fmedicale(id, fmedicale) {
      return this.http.post('http://localhost:8080/fmedicales/' + id , fmedicale);
  }
}