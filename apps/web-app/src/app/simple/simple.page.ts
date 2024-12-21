import { Component, computed, HostBinding, Inject, RendererFactory2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Language, LanguageService, MarkdownService, Theme, ThemeService } from '@portfolio/angular/common';

@Component({
    selector: 'portfolio-simple',
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
    ],
    templateUrl: './simple.page.html',
    styleUrls: ['./simple.page.scss'],
})
export class PortfolioSimpleComponent {
    title = 'Cédric Cazin - Portfolio';

    public version = '0.0.0';

    @HostBinding('class.scrollbar') scrollbar = true;

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

        // this.hljsLoader.setTheme(isDarkMode ? 'assets/styles/github-dark.css' : 'assets/styles/github.css');
    }

    // private hljsLoader: HighlightLoader = inject(HighlightLoader);

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
        private readonly httpClient: HttpClient,
        private readonly matIconRegistry: MatIconRegistry,
        private readonly domSanitizer: DomSanitizer,
        private readonly themeService: ThemeService,
        private readonly languageService: LanguageService,
        private readonly markdownService: MarkdownService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        @Inject(DOCUMENT) private document: Document,
        private readonly rendererFactory: RendererFactory2,
    ) {
        console.log(this.router.url);
        console.log(this.router.config);

        this.matIconRegistry.addSvgIcon(
            'github',
            this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/github/github-mark.svg'),
        );

        this.httpClient.get('/assets/version.json').subscribe((data: any) => {
            console.log(data);
            this.version = data.version;
        });
    }
}
