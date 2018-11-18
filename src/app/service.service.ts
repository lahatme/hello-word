import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Patient} from './patient';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  titel_name: string;
  description: string;
  baseUrl = 'http://localhost:5000/get_patients';
  patient: Patient[];
  list: any[];

  constructor(private  http: HttpClient) {

  }


  getAll(): Observable<Patient[]> {
    return this.http.get(`${this.baseUrl}/list`)
      .pipe(map((res) => {
        console.log('res' + res);
        this.patient = res['result'];
        console.log('patient' + this.patient);

        return this.patient;
      }));
  }


  getPatients() {
    console.log('GETTING PATIENTS');
    console.log('patient' + this.http.get<Patient[]>(this.baseUrl));

    return this.http.get<any[]>(this.baseUrl);
  }
}


