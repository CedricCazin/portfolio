import { Component } from '@angular/core';
import { Experience } from '../experiences.interface';
import { ExperiencesService } from '../experiences.service';

@Component({
    selector: 'portfolio-experiences-material',
    templateUrl: './experiences-material.component.html',
    styleUrls: ['./experiences-material.component.scss'],
})
export class ExperiencesMaterialComponent {
    public experiences: Experience[] = [];

    constructor(private experienceService: ExperiencesService) {
        this.experienceService.experiences.subscribe((experiences) => (this.experiences = experiences));
    }
}
