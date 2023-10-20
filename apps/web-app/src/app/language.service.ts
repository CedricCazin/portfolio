import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
    name: string;
    id: string;
    language: string;
    isDefault?: boolean;
}

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
    public readonly languages: Language[] = [
        {
            id: 'en-GB',
            name: 'English (UK)',
            language: 'en',
            isDefault: true,
        },
        {
            id: 'en-US',
            name: 'English (US)',
            language: 'en',
        },
        {
            id: 'fr-FR',
            name: 'Français (FR)',
            language: 'fr',
        },
    ];

    private _language: Language = this.languages[0];
    public set language(language: Language) {
        this.updateLanguage(language);
    }
    public get language(): Language {
        return this._language;
    }

    constructor(private translateService: TranslateService) {
        this.detectLanguages();

        translateService.setDefaultLang(this._language.language);
    }

    updateLanguage(language: Language) {
        this._language = language;

        this.translateService.use(language.language);
    }

    detectLanguages() {
        const i18n = this.languages.filter((language) => language.id === this.translateService.getBrowserCultureLang());

        this._language = i18n[0];
    }
}
