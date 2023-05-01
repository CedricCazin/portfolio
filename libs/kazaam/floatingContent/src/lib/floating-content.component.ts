import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';

///* Based on
///* * https://deck-24abcd.netlify.app/
///* * https://www.joshdance.com/100/day50/

@Component({
  selector: 'kazaam-floating-content',
  templateUrl: './floating-content.component.html',
  styleUrls: ['./floating-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FloatingContentComponent {
  @HostBinding('class.kazaam-floating-content') kazaamCard = true;
  @HostBinding('style') styles = '';

  @ViewChild('translator') translator!: ElementRef;
  @ViewChild('rotator') rotator!: ElementRef;

  @Input() translate = false;

  @Input()
  get translateX(): number {
    return this._translateX;
  }
  set translateX(translateX: number) {
    if (this.translator) {
      const clientRect = this.translator.nativeElement.getBoundingClientRect();
      this._translateX = translateX - (clientRect.left + clientRect.width / 2);
    }
  }
  private _translateX = 0;

  @Input()
  get translateY(): number {
    return this._translateY;
  }
  set translateY(translateY: number) {
    if (this.translator) {
      const clientRect = this.translator.nativeElement.getBoundingClientRect();
      this._translateY = translateY - (clientRect.top + clientRect.height / 2);
    }
  }
  private _translateY = 0;

  @Input()
  get translateZ(): number {
    return this._translateZ;
  }
  set translateZ(translateZ: number) {
    this._translateZ = translateZ || 0;
  }
  private _translateZ = 0;

  @Input() translateScale = 1;

  @Output() clickWithin = new EventEmitter<boolean>();

  private firstTransformation = true;

  @Input() rotate = true;
  public rotateX = '0deg';
  public rotateY = '0deg';

  @Input() foil = true;
  @Input() foilSpace = '5%';
  @Input() foilAngle = '133deg';
  @Input() foilSize = '25%';
  @Input() foilBrightness = 0.33;
  @Input() foilOpacity = 0.5;
  public foilPosX = '50%';
  public foilPosY = '50%';
  public foilRadiusX = '50%';
  public foilRadiusY = '50%';

  constructor(
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    // this.host.nativeElement.style.setProperty(`--${this.variable}`, value);
  }

  //------

  // @HostListener('mousemove', ['$event'])
  handleMouseMove(event: any) {
    const clientRect = this.rotator.nativeElement.getBoundingClientRect();

    const rotX =
      -((clientRect.height / 2 - (event.clientY - clientRect.y)) / 10) / 2;
    const rotY =
      (clientRect.width / 2 - (event.clientX - clientRect.x)) / 10 / 2;

    this.rotateX = `${rotX}deg`;
    // equivalent of this.wrapper.nativeElement.setProperty('--rotate-x', `${rotX}deg`);

    this.rotateY = `${rotY}deg`;
    // equivalent of this.wrapper.nativeElement.setProperty('--rotate-y', `${rotY}deg`);

    const foilX = ((event.clientX - clientRect.x) * 100) / clientRect.width;
    const foilY = ((event.clientY - clientRect.y) * 100) / clientRect.height;

    this.foilPosX = `${foilX}%`;
    this.foilPosY = `${foilY}%`;
    this.foilRadiusX = `${foilX}%`;
    this.foilRadiusY = `${foilY}%`;

    if (this.firstTransformation) {
      this.renderer.setStyle(
        this.rotator.nativeElement,
        'transition',
        `transform 0.33s linear`
      );
    } else {
      this.renderer.removeStyle(this.rotator.nativeElement, 'transition');
    }

    this.firstTransformation = false;
  }

  // @HostListener('mouseenter', ['$event'])
  handleMouseEnter() {
    this.firstTransformation = true;
  }

  // @HostListener('mouseleave', ['$event'])
  handleMouseLeave() {
    this.renderer.setStyle(
      this.rotator.nativeElement,
      'transition',
      `transform 0.33s ease-in-out`
    );

    this.rotateX = `0deg`;
    this.rotateY = `0deg`;
  }

  //------

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    this.clickWithin.emit(this.translator.nativeElement.contains(event.target));
  }
}
