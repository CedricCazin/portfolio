import { Component } from '@angular/core';
import { CVItem } from '../cv.interface';
import { CvService } from '../cv.service';

@Component({
  selector: 'portfolio-cv-timeline',
  templateUrl: './cv-timeline.component.html',
  styleUrls: ['./cv-timeline.component.scss'],
})
export class CvTimelineComponent {
  public cvItems: CVItem[];

  constructor(private cvService: CvService) {
    this.cvItems = this.cvService.cv;
  }
}