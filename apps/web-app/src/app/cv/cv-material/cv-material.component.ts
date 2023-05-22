import { Component } from '@angular/core';
import { CVItem } from '../cv.interface';
import { CvService } from '../cv.service';

@Component({
  selector: 'portfolio-cv-material',
  templateUrl: './cv-material.component.html',
  styleUrls: ['./cv-material.component.scss'],
})
export class CvMaterialComponent {
  public cvItems: CVItem[];

  constructor(private cvService: CvService) {
    this.cvItems = this.cvService.cv;
  }
}
