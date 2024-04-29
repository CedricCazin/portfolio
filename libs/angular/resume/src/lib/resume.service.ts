import { Injectable } from '@angular/core';
import { ResumeItem, Months } from './resume.interface';
import * as Showdown from 'showdown';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, mergeMap, of, switchMap, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ResumeService {
    constructor(private http: HttpClient) {}

    public get resume() {
        const converter = new Showdown.Converter();

        return this.http
            .get<ResumeItem[]>('https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/resume/resume.json')
            .pipe(
                switchMap((resumeItems) => {
                    const convertAllDescriptions = resumeItems.map((resumeItem) => {
                        return this.http.get(resumeItem.descriptionUrl, { responseType: 'text' }).pipe(
                            tap((resumeItemDescription) => {
                                resumeItem._descriptionHtml = converter.makeHtml(resumeItemDescription);
                            }),
                        );
                    });

                    return forkJoin(convertAllDescriptions).pipe(map(() => resumeItems));
                }),
            );
    }
}
