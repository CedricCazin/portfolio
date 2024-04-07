import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResumeItem } from '../resume.interface';
import { ResumeService } from '../resume.service';

@Component({
    standalone: true,
    imports: [CommonModule],
    providers: [ResumeService],
    templateUrl: './resume-timeline.component.html',
    styleUrls: ['./resume-timeline.component.scss'],
})
export class ResumeTimelineComponent {
    public resumeItems: ResumeItem[] = [];

    constructor(private resumeService: ResumeService) {
        this.resumeService.resume.subscribe((resumeItems) => (this.resumeItems = resumeItems));
    }
}
