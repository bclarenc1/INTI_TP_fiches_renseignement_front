import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class FvaccinationService {

    constructor(private http: HttpClient) { }

    fVaccination(idEnf, fvaccination) {
        return this.http.post('http://localhost:8080/fvaccinations/' + idEnf, fvaccination);
    }

    getFvaccination(idEnf) {
        return this.http.get('http://localhost:8080/fvaccinations/' + idEnf);
        }
    }