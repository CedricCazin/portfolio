import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.scss'],
})
export class CvContainerComponent {
  constructor(private router: Router) { }

  public navigateToMCvMaterial() {
    this.router.navigate(['/cv/', { outlets: { primary: 'material', help: 'material' } }]);
  }

  public navigateToCvTimeline() {
    this.router.navigate(['/cv/', { outlets: { primary: 'timeline', help: 'timeline' } }]);
  }

  public navigateToCvComics() {
    this.router.navigate(['/cv/', { outlets: { primary: 'comics', help: 'comics' } }]);
  }

}
