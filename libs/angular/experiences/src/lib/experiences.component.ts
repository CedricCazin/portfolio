import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ExperiencesService } from './experiences.service';
import { FloatingSkillComponent } from '@portfolio/angular/common';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, FloatingSkillComponent],
    providers: [ExperiencesService],
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
    constructor(private router: Router) {}

    public navigateToMExperienceMaterial() {
        this.router.navigate(['/experiences/', { outlets: { primary: 'material', help: 'material' } }]);
    }

    public navigateToExperienceTimeline() {
        this.router.navigate(['/experiences/', { outlets: { primary: 'timeline', help: 'timeline' } }]);
    }
}
