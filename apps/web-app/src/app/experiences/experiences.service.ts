import { Injectable } from '@angular/core';
import { Experience, Months } from './experiences.interface';
import * as Showdown from 'showdown';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, mergeMap, of, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  constructor(private http: HttpClient) { }

  public get experiences() {
    const converter = new Showdown.Converter();

    return this.http.get<Experience[]>('https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/resume/resume.json').pipe(
      switchMap(experiences => {

        const convertAllDescriptions = experiences.map((experience) => {
          return this.http.get(experience.descriptionUrl, { responseType: 'text' })
            .pipe(
              tap((experienceDescription) => {
                experience._descriptionHtml = converter.makeHtml(experienceDescription);
              }),
            )
        });

        return forkJoin(convertAllDescriptions).pipe(map(() => experiences));
      }),
    );
  }
}
