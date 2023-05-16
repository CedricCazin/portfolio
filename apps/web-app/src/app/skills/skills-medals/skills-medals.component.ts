import { Component } from '@angular/core';
import { SkillType } from '../skill.interface';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills-medals.component.html',
  styleUrls: ['./skills-medals.component.scss'],
})
export class SkillsMedalsComponent {
  public skills!: SkillType[];

  constructor(private skillsService: SkillsService) {
    this.skills = this.skillsService.skills;
  }
}
