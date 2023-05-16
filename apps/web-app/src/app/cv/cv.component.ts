import { Component } from '@angular/core';

interface CVItem {
  from: Date,
  to: Date | 'present',
  company: {
    name: string,
    linkedIn: string,
    url: string,
  },
  title: string,
  location: string,
  description: string,
}

@Component({
  selector: 'portfolio-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  public cv: CVItem[] = [
  ]
}
