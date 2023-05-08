import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Skill } from '../shared/skill.interface';

@Component({
  selector: 'skills-floating-skill',
  templateUrl: './floating-skill.component.html',
  styleUrls: ['./floating-skill.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FloatingSkillComponent {

  public translate = false;
  public translateScale = 1.5;
  public translateX = 0;
  public translateY = 0;
  public translateZ = 0;

  public animationHoverOut?: string;

  public path = 'polygon(94.33013% 47.5%, 94.69846% 48.2899%, 94.92404% 49.13176%, 95% 50%, 94.92404% 50.86824%, 94.69846% 51.7101%, 94.33013% 52.5%, 74.33013% 87.14102%, 73.83022% 87.85495%, 73.21394% 88.47124%, 72.5% 88.97114%, 71.7101% 89.33948%, 70.86824% 89.56505%, 70% 89.64102%, 30% 89.64102%, 29.13176% 89.56505%, 28.2899% 89.33948%, 27.5% 88.97114%, 26.78606% 88.47124%, 26.16978% 87.85495%, 25.66987% 87.14102%, 5.66987% 52.5%, 5.30154% 51.7101%, 5.07596% 50.86824%, 5% 50%, 5.07596% 49.13176%, 5.30154% 48.2899%, 5.66987% 47.5%, 25.66987% 12.85898%, 26.16978% 12.14505%, 26.78606% 11.52876%, 27.5% 11.02886%, 28.2899% 10.66052%, 29.13176% 10.43495%, 30% 10.35898%, 70% 10.35898%, 70.86824% 10.43495%, 71.7101% 10.66052%, 72.5% 11.02886%, 73.21394% 11.52876%, 73.83022% 12.14505%, 74.33013% 12.85898%)';

  @Input() skill!: Skill;

  handleMouseLeave() {
    this.animationHoverOut = 'floating-content-path-hover-out';
  }

  public clickWithin(isWithin: boolean) {
    if (isWithin) {
      this.translateX = window.innerWidth / 2;
      this.translateY = window.innerHeight / 2;
      this.translateZ = 666;

      this.translate = true;
    } else {
      this.translateX = 0;
      this.translateY = 0;
      this.translateZ = 0;

      this.translate = false;
    }
  }
}
