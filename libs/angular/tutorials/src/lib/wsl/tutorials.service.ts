import { Injectable } from '@angular/core';

import * as Showdown from 'showdown';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, mergeMap, of, switchMap, tap, throwError } from 'rxjs';
import { Routes } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class TutorialsService {
    constructor(private http: HttpClient) {}
}
