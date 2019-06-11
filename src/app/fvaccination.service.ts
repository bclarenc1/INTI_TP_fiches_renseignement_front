import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FvaccinationService {

  constructor(private http: HttpClient) { }

   addFvaccination(id, fvaccination) {
      return this.http.post('http://localhost:8080/fvaccinations/' + id, fvaccination);
  }
}