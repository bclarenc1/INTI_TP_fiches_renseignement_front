import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FmedicaleService {

  constructor(private http: HttpClient) { }

   fMedicale(idEnf, fmedicale) {
      return this.http.post('http://localhost:8080/fmedicales/' + idEnf , fmedicale);
  }
  getFmedicale(id) {
      return this.http.get('http://localhost:8080/fmedicales/' + id);
  }
}