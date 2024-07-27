import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AlumnoInsertRequest, GetAlumnoResponse } from '../models/Alumnos';
import { alumnos } from 'src/app/global/endpoints';


@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders ({})
  }

  getAlumno(): Observable<GetAlumnoResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetAlumnoResponse>(alumnos.get, null, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

  insertAlumno(person:AlumnoInsertRequest): Observable<boolean> {
    const httpOptions = {headers:this.headers}
    return this.http.post<boolean>(alumnos.insert, person, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}