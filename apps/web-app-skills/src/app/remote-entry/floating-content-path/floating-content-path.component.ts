import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Input, Renderer2, ViewChild } from '@angular/core';

const DEFAULT_DURATION = 500;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'floating-content-path',
  templateUrl: './floating-content-path.component.html',
  styleUrls: ['./floating-content-path.component.scss'],
  animations: [
    trigger('collapseAnimation', [
      state(
        'false',
        style({
          height: AUTO_STYLE,
          visibility: AUTO_STYLE,
          overflow: 'hidden',
        })
      ),
      state(
        'true',
        style({ height: '0', visibility: 'hidden', overflow: 'hidden' })
      ),
      transition(
        'false <=> true',
        animate(DEFAULT_DURATION + 'ms ease-in-out')
      ),
    ]),
  ],
})
export class FloatingContentPathComponent {
  public isHover = false;

  public translate = false;
  public translateScale = 1.5;
  public translateX = 0;
  public translateY = 0;
  public translateZ = 0;

  @ViewChild('floatingContent') floatingContent!: ElementRef;

  @Input() size = '250px';

  @Input() borderSize = '20px';

  @Input() borderColor = 'gray';

  // Examples: https://codepen.io/thebabydino/pen/XbxKbL
  // https://weareoutman.github.io/rounded-polygon/
  @Input() path = 'polygon(94.33013% 47.5%, 94.69846% 48.2899%, 94.92404% 49.13176%, 95% 50%, 94.92404% 50.86824%, 94.69846% 51.7101%, 94.33013% 52.5%, 74.33013% 87.14102%, 73.83022% 87.85495%, 73.21394% 88.47124%, 72.5% 88.97114%, 71.7101% 89.33948%, 70.86824% 89.56505%, 70% 89.64102%, 30% 89.64102%, 29.13176% 89.56505%, 28.2899% 89.33948%, 27.5% 88.97114%, 26.78606% 88.47124%, 26.16978% 87.85495%, 25.66987% 87.14102%, 5.66987% 52.5%, 5.30154% 51.7101%, 5.07596% 50.86824%, 5% 50%, 5.07596% 49.13176%, 5.30154% 48.2899%, 5.66987% 47.5%, 25.66987% 12.85898%, 26.16978% 12.14505%, 26.78606% 11.52876%, 27.5% 11.02886%, 28.2899% 10.66052%, 29.13176% 10.43495%, 30% 10.35898%, 70% 10.35898%, 70.86824% 10.43495%, 71.7101% 10.66052%, 72.5% 11.02886%, 73.21394% 11.52876%, 73.83022% 12.14505%, 74.33013% 12.85898%)';

  constructor(private host: ElementRef<HTMLElement>, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
  }

  @HostListener('mouseenter', ['$event'])
  handleMouseenter() {
    this.isHover = true;
  }

  @HostListener('mouseleave', ['$event'])
  handleMouseleave() {
    this.isHover = false;
  }

  public clickWithin(isWithin: boolean) {
    if (isWithin) {
      this.translateX = window.innerWidth / 2;
      this.translateY = window.innerHeight / 2;
      this.translateZ = 666;

      this.translate = true;
    } else {
      this.translateX = 0;
      this.translateY = 0;
      this.translateZ = 0;

      this.translate = false;
    }
  }
}
