import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AsyncPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Answer} from '../model/answer';
import {Observable, Subscription} from 'rxjs';
import {AnswersService} from '../answers.service';

@Component({
  selector: 'app-guests',
  imports: [
    FormsModule,
    NgClass,
    NgIf,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.scss',
  standalone: true
})
export class GuestsComponent implements OnInit, OnDestroy{
  password : string = '';
  closePasswordBlock : boolean = false;
  incorrectPassword : boolean = false;
  answers : Answer[] = [];
  subscription : Subscription;

  constructor(private answerService : AnswersService) {
  }

  ngOnInit() {
    this.subscription = this.answerService.getAnswers().subscribe({
      next: answers => {
        this.answers = answers;
      }
    });
  }

  checkPassword() {
    if (this.password === '01032019') {
      this.closePasswordBlock = true;
      this.incorrectPassword = false;
    } else {
      this.incorrectPassword = true;
      console.log('incorrect')
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
