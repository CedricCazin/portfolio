import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { KazaaamRouteNavListComponent } from '@kazaam';
import { ANGULAR_ROUTES } from './examples.routes';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, map, of, startWith, switchMap, tap } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        KazaaamRouteNavListComponent,
        MatDividerModule,
        MatSidenavModule,
        MatInputModule,
    ],
    template: `
        <mat-sidenav-container class="examples-sidenav-container" autosize>
            <mat-sidenav #examplesSidenav class="examples-sidenav" mode="side" position="start" opened>
                <mat-form-field class="examples-search">
                    <mat-label>Search</mat-label>
                    <mat-icon matPrefix>search</mat-icon>
                    <input matInput [formControl]="search" />
                    @if (search.dirty && !search.pristine && search.value.length > 0) {
                        <button matSuffix mat-icon-button (click)="search.reset()">
                            <mat-icon>close</mat-icon>
                        </button>
                    }
                </mat-form-field>

                <kazaam-route-nav-list [routes]="routes$" [filtered]="filtered"></kazaam-route-nav-list>
            </mat-sidenav>
            <mat-sidenav-content class="examples-sidenav-content"> </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    styles: `
        :host {
            --mat-sidenav-container-width: 300px;

            display: flex;
            flex-direction: column;
            flex-grow: 1;

            justify-content: center;

            .mat-mdc-form-field.examples-search {
                width: 100%;
            }

            .mat-sidenav-container.examples-sidenav-container {
                display: flex;
                flex-direction: column;
                flex: 1;

                background-color: transparent !important;

                .mat-sidenav.examples-sidenav {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .mat-sidenav-content.examples-sidenav-content {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }
            }
        }
    `,
})
export class AngularExamplesComponent {
    public search = new FormControl();
    public filtered = false;

    private readonly routes = ANGULAR_ROUTES[0].children!;
    public routes$: Routes = this.filterRoutes();

    constructor() {
        this.search.valueChanges.pipe(startWith(null), debounceTime(200)).subscribe((search: string) => {
            this.routes$ = this.filterRoutes();
        });
    }

    private filterRoutes(): Routes {
        const routes = JSON.parse(JSON.stringify(this.routes)) as Routes;

        if (this.search.pristine || (this.search.dirty && this.search.value.length === 0)) {
            this.filtered = false;
            return routes;
        }

        const search = this.search.value?.toLowerCase();
        this.filtered = true;

        const filterRoute = (route: Route): Route | undefined => {
            if (route.children) {
                route.children = route.children.map(filterRoute).filter((route) => route) as Routes;
            }

            if (
                (route.children && route.children.length > 0) ||
                route.data?.['navigation']?.name.toLowerCase().indexOf(search) >= 0
            ) {
                console.log(route);
                return route;
            }

            console.log('undefined');
            return undefined;
        };

        return routes.map(filterRoute).filter((r) => r) as Route[];
    }
}
