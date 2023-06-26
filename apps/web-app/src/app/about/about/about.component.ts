import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { AboutService } from '../about.service';

@Component({
    selector: 'portfolio-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

    public about: string | undefined = undefined;

    public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
        responsive: true,
        maintainAspectRatio: false,
    };

    public radarChartLabels: unknown[] | undefined = undefined;

    public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] | undefined = undefined;

    constructor(private router: Router, private aboutService: AboutService) {
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
