import { AfterViewInit, Component, ElementRef, HostBinding, Input, ViewChild, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { debounceTime, of, startWith, switchMap, tap } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { KazaaamRouteNavListComponent } from '@kazaam';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MarkdownContentComponent } from './markdown-content.component';
import { MarkdownService } from './markdown.service';
import { toObservable } from '@angular/core/rxjs-interop';

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
        MatDividerModule,
        MatSidenavModule,
        MatInputModule,

        KazaaamRouteNavListComponent,
    ],
    template: `
        <mat-sidenav-container class="markdown-container-sidenav-container" autosize>
            <mat-sidenav class="markdown-container-sidenav" mode="side" position="start" opened>
                @if (markdownRoutesResolved()) {
                    <mat-form-field class="markdown-container-search">
                        <mat-label>Search</mat-label>
                        <mat-icon matPrefix>search</mat-icon>
                        <input matInput [formControl]="search" />
                        @if (search.dirty && !search.pristine && search.value.length > 0) {
                            <button matSuffix mat-icon-button (click)="search.reset()">
                                <mat-icon>close</mat-icon>
                            </button>
                        }
                    </mat-form-field>

                    <kazaam-route-nav-list [routes]="filteredRoutes" [filtered]="filtered"></kazaam-route-nav-list>
                }
            </mat-sidenav>
            <mat-sidenav-content class="markdown-container-sidenav-content scrollbar">
                <router-outlet></router-outlet>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    styles: `
        :host {
            --mat-sidenav-container-width: 300px;

            display: flex;
            flex-direction: column;
            flex-grow: 1;

            overflow: hidden;

            .mat-sidenav-container.markdown-container-sidenav-container {
                flex: 1;

                background-color: transparent !important;

                .mat-sidenav.markdown-container-sidenav {
                    display: flex;
                    flex-direction: column;
                    flex: 1;

                    position: fixed;
                    top: 52px;

                    .mat-mdc-form-field.markdown-container-search {
                        width: 100%;
                    }
                }

                .mat-sidenav-content.markdown-container-sidenav-content {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }
            }
        }
    `,
})
export class MarkdownContainerComponent {
    public search = new FormControl();
    public filtered = false;

    private routes: Routes = [];
    public filteredRoutes: Routes = [];

    #markdownRoutesResolved = this.markdownService.markdownRoutesResolved;
    markdownRoutesResolved = computed(() => {
        if (this.#markdownRoutesResolved()) {
            this.routes = this.route.routeConfig?.children ?? [];
            this.filteredRoutes = this.filterRoutes();
        }
        return this.#markdownRoutesResolved();
    });

    constructor(
        private readonly httpClient: HttpClient,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly markdownService: MarkdownService,
    ) {
        this.search.valueChanges.pipe(startWith(null), debounceTime(200)).subscribe((search: string) => {
            this.filteredRoutes = this.filterRoutes();
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
