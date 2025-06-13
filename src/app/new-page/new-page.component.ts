import {Component, OnInit} from '@angular/core';
import {ObserveVisibilityDirective} from '../observe-visibility.directive';
@Component({
  selector: 'app-new-page',
  imports: [
    ObserveVisibilityDirective
  ],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss',
  standalone: true
})
export class NewPageComponent {
  acceptPresence() {
    console.log('worked')
  }

}
