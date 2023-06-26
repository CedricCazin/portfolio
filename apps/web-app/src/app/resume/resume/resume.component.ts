import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
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
