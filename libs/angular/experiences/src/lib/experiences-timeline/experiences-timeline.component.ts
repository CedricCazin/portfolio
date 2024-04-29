import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesService } from '../experiences.service';
import { Experience } from '../experiences.interface';

@Component({
    standalone: true,
    imports: [CommonModule],
    providers: [ExperiencesService],
    templateUrl: './experiences-timeline.component.html',
    styleUrls: ['./experiences-timeline.component.scss'],
})
export class ExperiencesTimelineComponent {
    public experiences: Experience[] = [];

    constructor(private experiencesService: ExperiencesService) {
        this.experiencesService.experiences.subscribe((experiences) => (this.experiences = experiences));
    }
}
