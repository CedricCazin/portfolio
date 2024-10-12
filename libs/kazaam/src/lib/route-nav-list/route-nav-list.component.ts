import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterModule, Routes } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, MatListModule, MatIconModule, MatExpansionModule],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'kazaam-route-nav-list',
    template: `
        <ng-template #routeNode let-route let-$index="index" let-siblingsHaveIcon="siblingsHaveIcon">
            <mat-expansion-panel [expanded]="isActiveSubsetRoute(route)" [@.disabled]="true" [class.mat-elevation-z0]="true">
                <mat-expansion-panel-header collapsedHeight="44px" expandedHeight="44px">
                    <mat-panel-title>
                        <mat-list-item>
                            <mat-icon *ngIf="route.data?.icon || siblingsHaveIcon" matListItemIcon>{{
                                route.data?.icon
                            }}</mat-icon>
                            <div matListItemTitle>{{ route.data?.name }}</div>
                        </mat-list-item>
                    </mat-panel-title>
                </mat-expansion-panel-header>

                <mat-nav-list>
                    <!-- https://github.com/angular/angular/issues/31930
                        routerLinkActive is not usable with template
                    
                        This works, since it is not a template:
                        <li *ngFor="let r of route.children">
                            <a routerLinkActive="active" routerLink="/{{ r.data?.fullPath }}">{{ r.data?.fullPath }}</a>
                        </li>
                    -->

                    @for (r of route.children; track $index) {
                        @if (r.children && r.children.length > 0) {
                            <ng-container
                                *ngTemplateOutlet="routeNode; context: getContext(route.children, r, $index)"
                            ></ng-container>
                        } @else {
                            <ng-container
                                *ngTemplateOutlet="routeLeaf; context: getContext(route.children, r, $index)"
                            ></ng-container>
                        }
                    } @empty {
                        none
                    }
                </mat-nav-list>
            </mat-expansion-panel>
        </ng-template>

        <ng-template #routeLeaf let-route let-$index="index" let-siblingsHaveIcon="siblingsHaveIcon">
            <mat-list-item
                [routerLink]="route.data?.fullPath ?? route.path"
                routerLinkActive="link-active"
                #rla="routerLinkActive"
            >
                <mat-icon *ngIf="route.data?.icon || siblingsHaveIcon" matListItemIcon>{{ route.data?.icon }}</mat-icon>
                <div matListItemTitle>{{ route.data?.name }}</div>
            </mat-list-item>
        </ng-template>

        <mat-accordion role="navigation" displayMode="default">
            @for (r of routes; track $index) {
                @if (r.children && r.children.length > 0) {
                    <ng-container *ngTemplateOutlet="routeNode; context: getContext(routes, r, $index)"></ng-container>
                } @else {
                    <mat-nav-list>
                        <ng-container *ngTemplateOutlet="routeLeaf; context: getContext(routes, r, $index)"></ng-container>
                    </mat-nav-list>
                }
            } @empty {
                none
            }
        </mat-accordion>
    `,
    styles: `
        :host {
            display: block;

            --mdc-list-list-item-one-line-container-height: 44px;

            mat-accordion {
                .mat-expansion-panel-body {
                    padding-bottom: 0;
                    padding-right: 0;
                }

                mat-nav-list {
                    padding: 0;

                    .mat-mdc-list-item:hover {
                        background: var(--mat-expansion-header-hover-state-layer-color);
                    }
                }

                .mat-expansion-panel-header {
                    padding-left: 0;
                }
            }
        }
    `,
})
export class KazaaamRouteNavListComponent {
    @Input() routes: Routes = [];

    @Input() filtered = false;

    constructor(private readonly router: Router) {}

    getContext(siblingsRoutes: Routes, route: Route, $index: number) {
        return {
            $implicit: route,
            $index: $index,
            siblingsHaveIcon: this.siblingsHaveIcon(siblingsRoutes),
        };
    }

    isActiveSubsetRoute(route: Route) {
        return this.router.isActive(route.data?.['fullPath'], {
            paths: 'subset',
            queryParams: 'ignored',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }

    siblingsHaveIcon(siblingsRoutes: Routes): boolean {
        return siblingsRoutes?.some((route: Route) => {
            return route.data?.['icon'];
        });
    }
}
