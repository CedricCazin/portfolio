import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

const DEFAULT_DURATION = 500;

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
                }),
            ),
            state('true', style({ height: '0', visibility: 'hidden', overflow: 'hidden' })),
            transition('false <=> true', animate(DEFAULT_DURATION + 'ms ease-in-out')),
        ]),
    ],
})
export class Card3dComponent {
    public isHover = false;

    public translate = false;
    public translateScale = 1.5;
    public translateX = 0;
    public translateY = 0;
    public translateZ = 0;

    @ViewChild('floatingContent') floatingContent!: ElementRef;

    constructor(private host: ElementRef<HTMLElement>) {}

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
