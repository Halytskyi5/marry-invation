import {Component, OnInit} from '@angular/core';
import {ObserveVisibilityDirective} from '../observe-visibility.directive';
import {WaIntersectionObservee, WaIntersectionObserverDirective} from '@ng-web-apis/intersection-observer';

@Component({
  selector: 'app-new-page',
  imports: [
    ObserveVisibilityDirective,
    WaIntersectionObserverDirective,
    WaIntersectionObservee
  ],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss',
  standalone: true
})
export class NewPageComponent implements OnInit{
  ngOnInit() {/*
  let targets = document.querySelector('.time-block');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting)
    })
  })
  observer.observe(targets);
*/
  }
  onIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting)
      console.error(entry)
    })
  }
  intersectImage(entries : IntersectionObserverEntry[]) {
    //entries.
    entries.forEach(entry => {
      entry.target.classList.add("image-animation")

    });
  }


}
