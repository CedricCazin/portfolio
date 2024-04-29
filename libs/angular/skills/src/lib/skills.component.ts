import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SkillsService } from './skills.service';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
    providers: [SkillsService],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {}
