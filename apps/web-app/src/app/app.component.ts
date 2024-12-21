import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { HighlightLoader } from 'ngx-highlightjs';

@Component({
    standalone: true,
    imports: [RouterModule],
    providers: [],
    selector: 'portfolio-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
