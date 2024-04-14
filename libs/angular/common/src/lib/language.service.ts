import { Injectable, Signal, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
    name: string;
    id: string;
    language: string;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
    public readonly languages: Language[] = [
        {
            id: 'en-GB',
            name: 'English (UK)',
            language: 'en',
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

    public readonly defaultLanguage = this.detectLanguages();

    #currentLanguage = signal<Language>(this.defaultLanguage);
    public readonly currentLanguage = this.#currentLanguage.asReadonly();

    constructor(private translateService: TranslateService) {}

    private detectLanguages(): Language {
        const i18n = this.languages.filter((language) => language.id === this.translateService.getBrowserCultureLang());
        return i18n?.[0] ?? this.languages[0];
    }

    public setCurrentLanguage(current: Language) {
        this.#currentLanguage.update(() => ({ ...current }));

        this.translateService.setDefaultLang(current.language);
        this.translateService.use(current.language);
    }
}
