import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  constructor(private http: HttpClient) { }


  ListEnfants() {
      return this.http.get('http://localhost:8080/enfants/');
}
  getEnfant(id: number) {
      return this.http.get('http://localhost:8080/enfants/' + id);
  }

  modifierRespLegal(idEnf, idResp) {
      return this.http.get('http://localhost:8080/enfants/' + idEnf + idResp);
  }

  attribuerEnfantResp(idResp, enfant) {
      return this.http.get('http://localhost:8080/enfants/' + idResp , enfant);
  }

}