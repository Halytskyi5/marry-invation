import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Answer} from './model/answer';
import {environment} from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private url = environment.APP_API_URL + "/answers";

  constructor(private http : HttpClient) { }

  getAnswers() : Observable<Answer[]> {
    return this.http.get<Answer[]>(this.url + '/get-all', {
      params: {
        time: new Date().getTime()
      }
    });
  }

  addAnswer(answer : Answer) : Observable<Answer> {
    return this.http.post<Answer>(this.url + "/add", answer);
  }
}
