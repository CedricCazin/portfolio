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
            <mat-expansion-panel
                #isActive="routerLinkActive"
                expanded="{{ isActive.isActive || filtered }}"
                routerLinkActive="link-active"
                [routerLinkActiveOptions]="{ exact: false }"
                [@.disabled]="true"
                [class.mat-elevation-z0]="true"
            >
                <mat-expansion-panel-header collapsedHeight="44px" expandedHeight="44px">
                    <mat-panel-title>
                        <mat-list-item>
                            <mat-icon *ngIf="route.data?.icon || siblingsHaveIcon" matListItemIcon>{{
                                route.data?.icon
                            }}</mat-icon>
                            <div matListItemTitle>{{ route.data?.name }}</div>
                        </mat-list-item>
                    </mat-panel-title>
                    <!-- <mat-panel-description> This is a summary of the content </mat-panel-description> -->
                </mat-expansion-panel-header>

                <mat-nav-list>
                    @for (route of route.children; track $index) {
                        @if (route.children && route.children.length > 0) {
                            <ng-container
                                *ngTemplateOutlet="routeNode; context: getContext(routes, route, $index)"
                            ></ng-container>
                        } @else {
                            <ng-container
                                *ngTemplateOutlet="routeLeaf; context: getContext(routes, route, $index)"
                            ></ng-container>
                        }
                    } @empty {
                        none
                    }
                </mat-nav-list>
            </mat-expansion-panel>
        </ng-template>

        <ng-template #routeLeaf let-route let-$index="index" let-siblingsHaveIcon="siblingsHaveIcon">
            <mat-list-item [routerLink]="route.data?.fullPath ?? route.path" routerLinkActive="link-active">
                <mat-icon *ngIf="route.data?.icon || siblingsHaveIcon" matListItemIcon>{{ route.data?.icon }}</mat-icon>
                <div matListItemTitle>{{ route.data?.name }}</div>
            </mat-list-item>
        </ng-template>

        <mat-accordion role="navigation" displayMode="default">
            @for (route of routes; track $index) {
                @if (route.children && route.children.length > 0) {
                    <ng-container *ngTemplateOutlet="routeNode; context: getContext(routes, route, $index)"></ng-container>
                } @else {
                    <mat-nav-list>
                        <ng-container *ngTemplateOutlet="routeLeaf; context: getContext(routes, route, $index)"></ng-container>
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
        const test = {
            $implicit: route,
            $index: $index,
            siblingsHaveIcon: this.siblingsHaveIcon(siblingsRoutes),
        };
        return test;
    }

    siblingsHaveIcon(siblingsRoutes: Routes): boolean {
        return siblingsRoutes?.some((route: Route) => {
            return route.data?.['icon'];
        });
    }
}
