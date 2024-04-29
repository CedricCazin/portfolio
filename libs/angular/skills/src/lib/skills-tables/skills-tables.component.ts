import { Component } from '@angular/core';
import { SkillType } from '@portfolio/angular/common';
import { SkillsService } from '../skills.service';
import { SkillsTableComponent } from '../skills-table/skills-table.component';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [CommonModule, SkillsTableComponent],
    providers: [SkillsService],
    templateUrl: './skills-tables.component.html',
    styleUrls: ['./skills-tables.component.scss'],
})
export class SkillsTablesComponent {
    public skillTypes!: SkillType[];

    constructor(private skillsService: SkillsService) {
        this.skillsService.skillTypes.subscribe((skillTypes) => (this.skillTypes = skillTypes));
    }
}
