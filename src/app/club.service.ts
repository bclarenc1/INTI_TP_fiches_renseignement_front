import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http: HttpClient) { }

  ListClubs() {
      return this.http.get('http://localhost:8080/clubs/');

  }
  addClub(club) {
      return this.http.post('http://localhost:8080/clubs/', club);
  }

  deleteClub(id: number) {
      return this.http.delete('http://localhost:8080/clubs/' + id);
  }

  getClub(id: number) {
      return this.http.get('http://localhost:8080/clubs/' + id);
  }

  editClub(id: number, club) {
      return this.http.put('http://localhost:8080/clubs/' + id, club);
  }
}
