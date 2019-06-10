import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResplegalService {

  constructor(private http: HttpClient) { }

  ListRespLegals() {
      return this.http.get('http://localhost:8080/respLegals/');

  }
  addRespLegal(respLegal) {
      return this.http.post('http://localhost:8080/respLegals/', respLegal);
  }

  deleteRespLegal(id: number) {
      return this.http.delete('http://localhost:8080/respLegals/' + id);
  }

  getRespLegal(id: number) {
      return this.http.get('http://localhost:8080/respLegals/' + id);
  }

  editRespLegal(id: number, respLegal) {
      return this.http.put('http://localhost:8080/respLegals/' + id, respLegal);
  }
}
