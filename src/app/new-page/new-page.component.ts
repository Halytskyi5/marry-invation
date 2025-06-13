import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ObserveVisibilityDirective} from '../observe-visibility.directive';
import {FormsModule} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
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
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  name = '';
  family = '';
  side = '';
  showConfirm = false;
  acceptPresence() {
    this.showConfirm = true;
    //this.renderer.addClass(this.el.nativeElement, "visible")
    console.log('added')
  }

  submitForm() {
    console.log(this.name + " " + this.family + " " + this.side)
    this.showConfirm = false;
  }

}
