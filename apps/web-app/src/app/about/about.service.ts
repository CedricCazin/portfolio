import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Showdown from 'showdown';
import { map, tap } from 'rxjs';
import { Chart, ChartData } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private http: HttpClient) { }

  public get about() {
    const converter = new Showdown.Converter();

    return this.http.get('https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/about/about.md', { responseType: 'text' })
      .pipe(
        map((resumeItemDescription) => converter.makeHtml(resumeItemDescription)),
      );
  }

  public get radar() {
    return this.http.get('https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/about/radar.json', { responseType: 'json' })
  }

}
