import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-resume-container',
  templateUrl: './resume-container.component.html',
  styleUrls: ['./resume-container.component.scss'],
})
export class ResumeContainerComponent {
  constructor(private router: Router) { }

  public navigateToMResumeMaterial() {
    this.router.navigate(['/resume/', { outlets: { primary: 'material', help: 'material' } }]);
  }

  public navigateToResumeTimeline() {
    this.router.navigate(['/resume/', { outlets: { primary: 'timeline', help: 'timeline' } }]);
  }

  public navigateToResumeComics() {
    this.router.navigate(['/resume/', { outlets: { primary: 'comics', help: 'comics' } }]);
  }

}
