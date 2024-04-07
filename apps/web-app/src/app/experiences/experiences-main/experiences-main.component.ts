import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ExperiencesService } from '../experiences.service';
import { FloatingSkillComponent } from '../../shared/floating-skill/floating-skill.component';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, FloatingSkillComponent],
    providers: [ExperiencesService],
    templateUrl: './experiences-main.component.html',
    styleUrls: ['./experiences-main.component.scss'],
})
export class ExperiencesMainComponent {
    constructor(private router: Router) {}

    public navigateToMExperienceMaterial() {
        this.router.navigate(['/experiences/', { outlets: { primary: 'material', help: 'material' } }]);
    }

    public navigateToExperienceTimeline() {
        this.router.navigate(['/experiences/', { outlets: { primary: 'timeline', help: 'timeline' } }]);
    }
}
