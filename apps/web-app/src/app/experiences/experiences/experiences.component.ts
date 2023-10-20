import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'portfolio-experiences',
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
