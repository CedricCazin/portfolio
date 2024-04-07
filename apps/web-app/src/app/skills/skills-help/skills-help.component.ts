import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, MatTabsModule],
    templateUrl: './skills-help.component.html',
    styleUrls: ['./skills-help.component.scss'],
})
export class SkillsHelpComponent {}
