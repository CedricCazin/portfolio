import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, Renderer2, RendererFactory2, computed } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Language, LanguageService } from '@portfolio/angular/common';
import { Theme, ThemeService } from '@portfolio/angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { KazaamBreadcrumbComponent } from '@kazaam';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,

        FormsModule,

        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,

        KazaamBreadcrumbComponent,
    ],
    providers: [ThemeService, LanguageService],
    selector: 'portfolio-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    private renderer: Renderer2;

    title = 'Cédric Cazin - Portfolio';

    public showHelp = true;

    public version = '0.0.0';

    public languages: Language[] = this.languageService.languages;
    #currentLanguage = this.languageService.currentLanguage;
    public get currentLanguage(): Language {
        return this.#currentLanguage();
    }
    public set currentLanguage(language: Language) {
        this.languageService.setCurrentLanguage(language);
    }

    public themes: Theme[] = this.themeService.themes;

    #theme = computed(() => this.themeService.themeSettings().theme);
    public get theme(): Theme {
        return this.#theme();
    }
    public set theme(theme: Theme) {
        this.themeService.setTheme(theme);
    }

    #isDarkMode = computed(() => this.themeService.themeSettings().isDarkMode);
    public get isDarkMode(): boolean {
        return this.#isDarkMode();
    }
    public set isDarkMode(isDarkMode: boolean) {
        this.themeService.setIsDarkMode(isDarkMode);
    }

    #isGlassMode = computed(() => this.themeService.themeSettings().isGlassMode);
    public get isGlassMode(): boolean {
        return this.#isGlassMode();
    }
    public set isGlassMode(isGlassMode: boolean) {
        this.themeService.setIsGlassMode(isGlassMode);
    }

    public getThemePreview(theme: Theme) {
        return `/assets/themes/${theme.id}-${this.isDarkMode ? 'dark' : 'light'}-theme.svg`;
    }

    public getLanguagePreview(language: Language) {
        return `/assets/i18n/${language.id}.svg`;
    }

    constructor(
        private http: HttpClient,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private themeService: ThemeService,
        private languageService: LanguageService,
        @Inject(DOCUMENT) private document: Document,
        private rendererFactory: RendererFactory2,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);

        this.matIconRegistry.addSvgIcon(
            'github',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/github/github-mark.svg'),
        );

        this.http.get('/assets/version.json').subscribe((data: any) => {
            console.log(data);
            this.version = data.version;
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.renderer.removeClass(this.document.body, 'cold-start');
        }, 2000);
    }
}
