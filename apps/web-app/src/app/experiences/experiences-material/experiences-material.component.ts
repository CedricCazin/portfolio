import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ExperiencesService } from '../experiences.service';
import { Experience } from '../experiences.interface';
import { FloatingSkillComponent } from '../../shared/floating-skill/floating-skill.component';

@Component({
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, FloatingSkillComponent],
    providers: [ExperiencesService],
    templateUrl: './experiences-material.component.html',
    styleUrls: ['./experiences-material.component.scss'],
})
export class ExperiencesMaterialComponent {
    public experiences: Experience[] = [];

    constructor(private experienceService: ExperiencesService) {
        this.experienceService.experiences.subscribe((experiences) => (this.experiences = experiences));
    }
}
