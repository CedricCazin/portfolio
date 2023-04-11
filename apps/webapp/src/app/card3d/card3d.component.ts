import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'portfolio-card-3d',
  templateUrl: './card3d.component.html',
  styleUrls: ['./card3d.component.scss'],
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
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class Card3dComponent {
  public collapse = false;

  public onClick() {
    this.collapse = !this.collapse;
  }
}
