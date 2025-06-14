import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Answer} from './model/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private url = "http://localhost:8080/answers";

  constructor(private http : HttpClient) { }

  getAnswers() : Observable<Answer[]> {
    return this.http.get<Answer[]>(this.url + '/get-all');
  }

  addAnswer(answer : Answer) : Observable<Answer> {
    return this.http.post<Answer>(this.url + "/add", answer);
  }
}
