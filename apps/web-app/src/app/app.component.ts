import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

declare class FinisherHeader {
    constructor(i: any);
}

@Component({
    selector: 'portfolio-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    title = 'web-app';

    cursorLeft = '';
    cursorTop = '';
    cursorOpacity = '';

    ngAfterViewInit(): void {
        this.initHeader();
    }

    private initHeader() {
        new FinisherHeader({
            count: 6,
            size: {
                min: 1100,
                max: 1300,
                pulse: 0,
            },
            speed: {
                x: {
                    min: 0.1,
                    max: 0.3,
                },
                y: {
                    min: 0.1,
                    max: 0.3,
                },
            },
            colors: {
                background: '#9138e5',
                particles: ['#6bd6ff', '#ffcb57', '#ff333d'],
            },
            blending: 'overlay',
            opacity: {
                center: 1,
                edge: 0.1,
            },
            skew: -2,
            shapes: ['c'],
        });
    }

    onClick() {
        console.log('click');
    }

    // --

    @HostListener('mousemove', ['$event'])
    onMousemove(event: any) {
        const x = event.pageX;
        const y = event.pageY;

        this.cursorLeft = (x - 175) + "px";
        this.cursorTop = (y - 175) + "px";
        this.cursorOpacity = '1';
    }
}
