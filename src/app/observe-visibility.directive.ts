import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {delay, Observer} from 'rxjs';
import {log} from 'util';

@Directive({
  selector: '[appObserveVisibility]',
  standalone: true
})
export class ObserveVisibilityDirective implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) {}


  ngOnInit() {
    if (typeof window !== 'undefined') {
       const observer = new IntersectionObserver((entries, obs) => {
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             this.renderer.addClass(this.el.nativeElement, 'animation');
             console.log('add')
             obs.unobserve(entry.target);
           }
         });
       });
       observer.observe(this.el.nativeElement);
    }
  }
}
