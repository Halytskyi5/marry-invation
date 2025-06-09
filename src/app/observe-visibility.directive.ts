import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appObserveVisibility]',
  standalone: true
})
export class ObserveVisibilityDirective implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    /*let target = document.querySelector('.time-block')
    let options = {
      //root: document.querySelector('scroll'),
      threshold: 0.5 // Блок з'явиться, коли 50% його буде видно
    };
    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'is-visible');
          observer.unobserve(this.el.nativeElement); // Зупиняємо спостереження
        }
      });
    };

    //observer.observe(target);

    const observer = new IntersectionObserver(callback, options);

    observer.observe(this.el.nativeElement);*/
  }

  /*
  ngOnInit() {
    let targets = document.querySelectorAll('.time-block');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting)
      })
    })
    targets.forEach(target => {
      observer.observe(target);
    })
  }*/
}
