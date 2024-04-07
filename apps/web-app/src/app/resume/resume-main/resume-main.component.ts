import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../resume.service';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
    providers: [ResumeService],
    templateUrl: './resume-main.component.html',
    styleUrls: ['./resume-main.component.scss'],
})
export class ResumeMainComponent {
    constructor(private router: Router) {}

    public navigateToMResumeMaterial() {
        this.router.navigate(['/resume/', { outlets: { primary: 'material', help: 'material' } }]);
    }

    public navigateToResumeTimeline() {
        this.router.navigate(['/resume/', { outlets: { primary: 'timeline', help: 'timeline' } }]);
    }

    public navigateToResumeComics() {
        this.router.navigate(['/resume/', { outlets: { primary: 'comics', help: 'comics' } }]);
    }
}
