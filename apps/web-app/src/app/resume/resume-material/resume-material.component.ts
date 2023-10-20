import { Component } from '@angular/core';
import { ResumeItem } from '../resume.interface';
import { ResumeService } from '../resume.service';

@Component({
    selector: 'portfolio-resume-material',
    templateUrl: './resume-material.component.html',
    styleUrls: ['./resume-material.component.scss'],
})
export class ResumeMaterialComponent {
    public resumeItems: ResumeItem[] = [];

    constructor(private resumeService: ResumeService) {
        this.resumeService.resume.subscribe((resumeItems) => (this.resumeItems = resumeItems));
    }
}
