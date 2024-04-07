import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ResumeService } from '../resume.service';
import { ResumeItem } from '../resume.interface';
import { FloatingSkillComponent } from '../../shared/floating-skill/floating-skill.component';

@Component({
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, FloatingSkillComponent],
    providers: [ResumeService],
    templateUrl: './resume-material.component.html',
    styleUrls: ['./resume-material.component.scss'],
})
export class ResumeMaterialComponent {
    public resumeItems: ResumeItem[] = [];

    constructor(private resumeService: ResumeService) {
        this.resumeService.resume.subscribe((resumeItems) => (this.resumeItems = resumeItems));
    }
}
