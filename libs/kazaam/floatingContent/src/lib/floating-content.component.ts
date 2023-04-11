import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'kazaam-floating-content',
  templateUrl: './floating-content.component.html',
  styleUrls: ['./floating-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FloatingContentComponent {
  @HostBinding('class.kazaam-floating-content') kazaamCard = true;
  @HostBinding('style') styles = '';

  @ViewChild('wrapper') wrapper!: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  handleMousemove(event: any) {
    const wrap = this.wrapper.nativeElement.getBoundingClientRect();

    const rotX = -(wrap.height / 2 - (event.clientY - wrap.y)) / 7;
    const rotY = (wrap.width / 2 - (event.clientX - wrap.x)) / 7;

    this.renderer.setStyle(
      this.wrapper.nativeElement,
      'transform',
      `rotateY(${rotY}deg) rotateX(${rotX}deg)`
    );
  }

  @HostListener('mouseenter', ['$event'])
  handleMouseenter(event: any) {
    this.renderer.setStyle(this.wrapper.nativeElement, 'transition', `none`);
  }

  @HostListener('mouseleave', ['$event'])
  handleMouseleave(event: any) {
    this.renderer.setStyle(
      this.wrapper.nativeElement,
      'transition',
      `transform 500ms ease-in-out`
    );
    this.renderer.setStyle(this.wrapper.nativeElement, 'transform', `none`);
  }
}
