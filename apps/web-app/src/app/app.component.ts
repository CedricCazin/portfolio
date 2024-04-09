import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Language, LanguageService } from './shared/language.service';
import { Theme, ThemeService } from './shared/theme.service';
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
    ],
    providers: [ThemeService, LanguageService],
    selector: 'portfolio-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    private renderer: Renderer2;

    title = 'web-app';

    cursorLeft = '';
    cursorTop = '';
    cursorOpacity = '';

    public showHelp = true;

    public version = '0.0.0';

    public languages: Language[] = this.languageService.languages;

    private _language: Language = this.languages[0];
    public get language(): Language {
        return this._language;
    }
    public set language(language: Language) {
        this._language = language;
        this.languageService.language = language;
    }

    public themes: Theme[] = this.themeService.themes;

    private _theme: Theme = this.themes[0];
    public get theme(): Theme {
        return this._theme;
    }
    public set theme(theme: Theme) {
        this._theme = theme;
        this.themeService.theme = theme;
    }

    private _darkMode = true;
    public get darkMode(): boolean {
        return this._darkMode;
    }
    public set darkMode(isDark: boolean) {
        this._darkMode = isDark;
        this.themeService.darkMode = this._darkMode;
    }

    private _glassMode = true;
    public get glassMode(): boolean {
        return this._glassMode;
    }
    public set glassMode(glassMode: boolean) {
        this._glassMode = glassMode;
        this.themeService.glassMode = this._glassMode;
    }

    public getThemePreview(theme: Theme) {
        return `/assets/themes/${theme.id}-${this.darkMode ? 'dark' : 'light'}-theme.svg`;
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

        this.themes = this.themeService.themes;

        this._theme = this.themeService.theme;
        this._darkMode = this.themeService.darkMode;
        this._glassMode = this.themeService.glassMode;

        this.languages = this.languageService.languages;

        this._language = this.languageService.language;

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

    // --

    @HostListener('mousemove', ['$event'])
    onMousemove(event: any) {
        const x = event.pageX;
        const y = event.pageY;

        this.cursorLeft = x - 175 + 'px';
        this.cursorTop = y - 175 + 'px';
        this.cursorOpacity = '1';
    }
}
