import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Skill, SkillType } from '../skill.interface';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'portfolio-skills-tables',
  templateUrl: './skills-tables.component.html',
  styleUrls: ['./skills-tables.component.scss'],
})
export class SkillsTablesComponent {
  public skillTypes!: SkillType[];

  constructor(private skillsService: SkillsService) {
    this.skillsService.skillTypes.subscribe((skillTypes) => this.skillTypes = skillTypes);
  }
}
