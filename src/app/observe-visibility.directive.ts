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
    //let target = document.querySelector('.time-block')
    /*let options = {
      //root: document.querySelector('scroll'),
      threshold: 0.1 // Блок з'явиться, коли 50% його буде видно
    };
    let callback = (entries : IntersectionObserverEntry[], observer : IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'image-animation');
          console.error("add class")
          observer.unobserve(this.el.nativeElement); // Зупиняємо спостереження
        }
      });
    };*/

    //observer.observe(target);

    if (typeof window !== 'undefined') {
       const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             this.renderer.addClass(this.el.nativeElement, 'animation');
           }
           //observer.unobserve(this.el.nativeElement);
           this.el.nativeElement.unobserve();
         });
       })
      observer.observe(this.el.nativeElement);
    } //else {
      //this.renderer.addClass(this.el.nativeElement, 'image-animation');
    //}

    //const observer = new IntersectionObserver(callback, options);

    //observer.observe(this.el.nativeElement);
  }
}
