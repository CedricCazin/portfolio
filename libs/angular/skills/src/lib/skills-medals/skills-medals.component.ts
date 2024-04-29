import { Component } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SkillType } from '@portfolio/angular/common';
import { SkillsService } from '../skills.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FloatingSkillComponent } from '@portfolio/angular/common';

@Component({
    standalone: true,
    imports: [
        CommonModule,

        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressBarModule,

        FloatingSkillComponent,
    ],
    templateUrl: './skills-medals.component.html',
    styleUrls: ['./skills-medals.component.scss'],
})
export class SkillsMedalsComponent {
    public skillTypes!: SkillType[];

    constructor(private skillsService: SkillsService) {
        this.skillsService.skillTypes.subscribe((skillTypes) => (this.skillTypes = skillTypes));
    }
}
