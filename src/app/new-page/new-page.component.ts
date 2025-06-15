import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ObserveVisibilityDirective} from '../observe-visibility.directive';
import {FormsModule} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {AnswersService} from '../answers.service';
import {Answer} from '../model/answer';
import {Subscription} from 'rxjs';
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
export class NewPageComponent {
  constructor(private renderer: Renderer2, private el: ElementRef, private answerService : AnswersService) {}
  name = '';
  family = '';
  side = '';
  showConfirm = false;
  acceptPresence() {
    this.showConfirm = true;
  }

  submitForm() {
    let answer : Answer = {
      name : this.name,
      family : this.family,
      fromGroom: this.side === 'groom'
    }
    this.answerService.addAnswer(answer).subscribe({
      next: response => {
        console.log(response);
        this.closeWindow()
      },
      error: err => {
        console.error(err);
      }, complete () {
      }
    });
  }

  closeWindow() {
    this.showConfirm = false;
  }

}
