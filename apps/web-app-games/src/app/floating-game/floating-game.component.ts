import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Game } from '../shared/game.interface';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'floating-game',
  templateUrl: './floating-game.component.html',
  styleUrls: ['./floating-game.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FloatingGameComponent {
  public isHover = false;

  public translate = false;
  public translateScale = 1.5;

  @HostBinding("style.--animation-hover-out") animationHoverOut?: string;
  @HostBinding("class") classes = 'floating-game';

  @Input() game!: Game;

  @Output() hover = new EventEmitter<boolean>();

  constructor(private host: ElementRef<HTMLElement>, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
  }

  @HostListener('mouseenter', ['$event'])
  handleMouseenter() {
    this.hover.emit(true);
  }

  @HostListener('mouseleave', ['$event'])
  handleMouseleave() {
    this.hover.emit(false);

    this.animationHoverOut = 'floating-game-hover-out';
  }
}
