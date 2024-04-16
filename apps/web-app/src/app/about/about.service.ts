import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Showdown from 'showdown';
import { Observable, concatMap, delay, from, map, of } from 'rxjs';
import { LanguageService } from '@portfolio/angular/common';
import { Breadcrumb } from '@kazaam';

@Injectable({
    providedIn: 'root',
})
export class AboutService {
    constructor(
        private http: HttpClient,
        private languageService: LanguageService,
    ) {}

    public getAbout(language?: string) {
        const converter = new Showdown.Converter();

        return this.http
            .get(
                `https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/about/about.${this.languageService.currentLanguage().language}.md`,
                { responseType: 'text' },
            )
            .pipe(map((resumeItemDescription) => converter.makeHtml(resumeItemDescription)));
    }

    public getRadar() {
        return this.http.get('https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/about/radar.json', {
            responseType: 'json',
        });
    }
}
