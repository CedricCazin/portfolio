import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData } from 'chart.js';
import { AboutService } from '../about.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    standalone: true,
    imports: [CommonModule, MatCardModule, BaseChartDirective],
    providers: [AboutService],
    templateUrl: './about-main.component.html',
    styleUrls: ['./about-main.component.scss'],
})
export class AboutMainComponent {
    public about: string | undefined = undefined;

    public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
        responsive: true,
        maintainAspectRatio: false,
    };

    public radarChartLabels: unknown[] | undefined = undefined;

    public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] | undefined = undefined;

    constructor(
        private router: Router,
        private aboutService: AboutService,
    ) {
        this.aboutService.radar.subscribe((radarData) => {
            const rr = radarData as ChartData<'radar'>;
            this.radarChartLabels = rr.labels;
            this.radarChartDatasets = rr.datasets;
        });

        this.aboutService.about.subscribe((about) => {
            this.about = about;
        });
    }
}
