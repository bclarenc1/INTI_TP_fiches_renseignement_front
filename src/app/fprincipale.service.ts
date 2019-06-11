import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FprincipaleService {

  constructor(private http: HttpClient) { }

   addFprincipale(id, fprincipale) {
      return this.http.post('http://localhost:8080/fprincipales/' + id, fprincipale );
  }
}