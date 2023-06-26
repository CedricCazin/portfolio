import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-experiences-container',
  templateUrl: './experiences-container.component.html',
  styleUrls: ['./experiences-container.component.scss'],
})
export class ExperiencesContainerComponent {
  constructor(private router: Router) { }

  public navigateToMExperienceMaterial() {
    this.router.navigate(['/experiences/', { outlets: { primary: 'material', help: 'material' } }]);
  }

  public navigateToExperienceTimeline() {
    this.router.navigate(['/experiences/', { outlets: { primary: 'timeline', help: 'timeline' } }]);
  }
}
