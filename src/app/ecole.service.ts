import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcoleService {

  constructor(private http: HttpClient) { }

  ListEcoles() {
      return this.http.get('http://localhost:8080/ecoles/');

  }
  addEcole(ecole) {
      return this.http.post('http://localhost:8080/ecoles/', ecole);
  }

  deleteEcole(id: number) {
      return this.http.delete('http://localhost:8080/ecoles/' + id);
  }

  getEcole(id: number) {
      return this.http.get('http://localhost:8080/ecoles/' + id);
  }

  editEcole(id: number, ecole) {
      return this.http.put('http://localhost:8080/ecoles/' + id, ecole);
  }
}
