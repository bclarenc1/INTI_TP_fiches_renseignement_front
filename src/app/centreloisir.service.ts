import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentreloisirService {

  constructor(private http: HttpClient) { }

  ListCentreLoisirs() {
      return this.http.get('http://localhost:8080/centreLoisirs/');

  }
  addCentreLoisir(centreLoisir) {
      return this.http.post('http://localhost:8080/centreLoisirs/', centreLoisir);
  }

  deleteCentreLoisir(id: number) {
      return this.http.delete('http://localhost:8080/centreLoisirs/' + id);
  }

  getCentreLoisir(id: number) {
      return this.http.get('http://localhost:8080/centreLoisirs/' + id);
  }

  editCentreLoisir(id: number, centreLoisir) {
      return this.http.put('http://localhost:8080/centreLoisirs/' + id, centreLoisir);
  }

}
