import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './Aluno';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  url = 'https://localhost:7187/api/Alunos'
  constructor(private http: HttpClient) { }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.url);
  }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(this.url + '/' + id);
  }

  addAluno(aluno: Aluno): Observable<any> {
    return this.http.post<Aluno>(this.url, aluno, httpOptions);
  }

  updateAluno(aluno: Aluno): Observable<any> {
    return this.http.put<Aluno>(this.url, aluno, httpOptions);
  }

  deleteAluno(id: number): Observable<any> {
    const apiUrl = `${this.url}/${id}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
