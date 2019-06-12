import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FprincipaleService {

  constructor(private http: HttpClient) { }

   fPrincipale(idEnf, fprincipale) {
      return this.http.post('http://localhost:8080/fprincipales/' + idEnf, fprincipale );
  }
   getFvaccination(id) {
    return this.http.get('http://localhost:8080/fprincipales/' + id);
        }
}