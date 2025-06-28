import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ObserveVisibilityDirective} from '../observe-visibility.directive';
import {FormsModule, NgForm} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {AnswersService} from '../answers.service';
import {Answer} from '../model/answer';
import {Subscription} from 'rxjs';
import {response} from 'express';

@Component({
  selector: 'app-new-page',
  imports: [
    ObserveVisibilityDirective,
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss',
  standalone: true
})
export class NewPageComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2, private el: ElementRef, private answerService: AnswersService) {
  }

  name = '';
  family = '';
  side = '';
  showConfirm = false;
  showSuccess: boolean = false;
  addAnswerSubscription: Subscription = Subscription.prototype;
  wakeUpServer: Subscription = Subscription.prototype;

  ngOnInit(): void {
    this.wakeUpServer = this.answerService.getAnswers().subscribe({
      next: value => value,
      error: err => err
    });
  }

  acceptPresence() {
    this.showConfirm = true;
  }

  submitForm(form :NgForm) {
    let answer: Answer = {
      name: this.name,
      family: this.family,
      fromGroom: this.side === 'groom'
    }
    this.addAnswerSubscription = this.answerService.addAnswer(answer).subscribe({
      next: response => {
        this.closeWindow();
        console.warn(response);
        this.showSuccess = true;
        form.reset();
      },
      error: err => {
        console.error(err);
      }
    });

  }

  closeWindow() {
    this.showConfirm = false;

  }

  closeSuccess() {
    this.showSuccess = false;
  }

  ngOnDestroy(): void {
    if (!this.addAnswerSubscription.closed) {
      this.addAnswerSubscription.unsubscribe();
    }
    if (!this.wakeUpServer.closed) {
      this.wakeUpServer.unsubscribe();
    }

  }


}
