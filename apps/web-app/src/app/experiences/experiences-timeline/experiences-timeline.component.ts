import { Component } from '@angular/core';
import { Experience } from '../experiences.interface';
import { ExperiencesService } from '../experiences.service';

@Component({
  selector: 'portfolio-experiences-timeline',
  templateUrl: './experiences-timeline.component.html',
  styleUrls: ['./experiences-timeline.component.scss'],
})
export class ExperiencesTimelineComponent {
  public experiences: Experience[] = [];

  constructor(private experiencesService: ExperiencesService) {
    this.experiencesService.experiences.subscribe((experiences) => this.experiences = experiences);
  }
}
