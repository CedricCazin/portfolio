import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrustResourceUrl } from '../trust.pipes/trust-resource-url.pipe';

@Component({
    selector: 'portfolio-iframe',
    standalone: true,
    imports: [CommonModule, TrustResourceUrl],
    template: `<iframe [src]="url | trustResourceUrl"></iframe>`,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: center;
            min-height: 100%;

            iframe {
                border: none;
                height: 100%;
                width: 100%;
            }
        }
    `,
})
export class IFrameComponent {
    @Input({ required: true }) url!: string;
}

// width: 100vw; height: 100vh
