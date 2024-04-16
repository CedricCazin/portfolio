import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ChartConfiguration, ChartData } from 'chart.js';
import { AboutService } from '../about.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { Language, LanguageService } from '@portfolio/angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
    standalone: true,
    imports: [CommonModule, MatCardModule, BaseChartDirective, RouterModule],
    providers: [AboutService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './about-main.component.html',
    styleUrls: ['./about-main.component.scss'],
})
export class AboutMainComponent {
    #currentLanguage = this.languageService.currentLanguage;

    public radarChartLabels: unknown[] | undefined = undefined;
    public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] | undefined = undefined;
    public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
        responsive: true,
        maintainAspectRatio: false,
    };

    public about = toSignal(
        toObservable(this.#currentLanguage).pipe(
            switchMap((currentLanguage) => this.aboutService.getAbout(currentLanguage.language)),
        ),
    );

    constructor(
        private router: Router,
        private aboutService: AboutService,
        private languageService: LanguageService,
    ) {
        this.aboutService.getRadar().subscribe((radarData) => {
            const rr = radarData as ChartData<'radar'>;
            this.radarChartLabels = rr.labels;
            this.radarChartDatasets = rr.datasets;
        });
    }
}
