import { Component, ContentChild, ElementRef, Injector, Signal, TemplateRef, signal } from '@angular/core';
import {
    BehaviorSubject,
    Observable,
    concat,
    expand,
    filter,
    map,
    merge,
    mergeMap,
    of,
    pluck,
    reduce,
    takeWhile,
    tap,
    toArray,
} from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { update } from 'lodash';

export interface Breadcrumb {
    path: string;
    order?: number;
    name?: string;
    icon?: string;
    image?: string;
    useTemplate?: boolean;

    children?: Breadcrumb[];
    childrenHasIcon?: boolean;
    childrenHasImage?: boolean;
    childrenUseTemplate?: boolean;

    parent?: Breadcrumb;
}

@Component({
    selector: 'kazaam-breadcrumb',
    standalone: true,
    imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatMenuModule],
    styles: `
        :host {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
        }

        .breadcrumb-button {
            height: var(--mdc-icon-button-state-layer-size);

            font-family: var(--mat-toolbar-title-text-font);
            font-size: var(--mat-toolbar-title-text-size);
            line-height: var(--mat-toolbar-title-text-line-height);
            font-weight: var(--mat-toolbar-title-text-weight);
            letter-spacing: var(--mat-toolbar-title-text-tracking);
        }

        .mat-mdc-menu-content {
            max-width: fit-content;
        }

        .mat-mdc-menu-item {
            width: 250px;
        }
    `,
    template: `
        @for (breadcrumb of breadcrumbs(); track breadcrumb; let last = $last) {
            @if (breadcrumb?.parent?.children?.length ?? 0 > 0) {
                <button
                    mat-button
                    class="breadcrumb-button"
                    color="secondary"
                    #menuTrigger="matMenuTrigger"
                    [matMenuTriggerFor]="menu"
                >
                    @if (breadcrumb.icon) {
                        <mat-icon>{{ breadcrumb.icon }}</mat-icon>
                    } @else if (breadcrumb.image) {
                        <img [src]="breadcrumb?.image" class="mat-icon" />
                    }

                    @if (breadcrumb.useTemplate) {
                        <template
                            [ngTemplateOutletContext]="{
                                $implicit: breadcrumb
                            }"
                            [ngTemplateOutlet]="breadcrumbTemplate"
                        ></template>
                    } @else {
                        <span>{{ breadcrumb.name }}</span>
                    }

                    <mat-icon iconPositionEnd>{{ menuTrigger.menuOpen ? 'expand_less' : 'expand_more' }}</mat-icon>
                </button>

                <mat-menu #menu="matMenu">
                    @for (breadcrumbChild of breadcrumb.parent?.children; track breadcrumbChild) {
                        <button
                            mat-menu-item
                            class="breadcrumb-button"
                            color="secondary"
                            [routerLink]="breadcrumbChild.path"
                            [disabled]="breadcrumbChild.name === breadcrumb.name"
                        >
                            @if (breadcrumbChild.icon) {
                                <mat-icon>{{ breadcrumbChild.icon }}</mat-icon>
                            } @else if (breadcrumbChild.image) {
                                <img [src]="breadcrumbChild.image" class="mat-icon" />
                            }

                            @if (breadcrumbChild.useTemplate) {
                                <template
                                    [ngTemplateOutletContext]="{
                                        $implicit: breadcrumbChild
                                    }"
                                    [ngTemplateOutlet]="breadcrumbChildTemplate"
                                ></template>
                            } @else {
                                <span>{{ breadcrumbChild.name }}</span>
                            }
                        </button>
                    }
                </mat-menu>
            } @else {
                @if ((breadcrumb.icon || breadcrumb.image) && !breadcrumb.name && !breadcrumb.useTemplate) {
                    <button
                        mat-icon-button
                        class="breadcrumb-button"
                        color="secondary"
                        [routerLink]="breadcrumb.path"
                        [disabled]="last"
                    >
                        @if (breadcrumb.icon) {
                            <mat-icon>{{ breadcrumb.icon }}</mat-icon>
                        } @else if (breadcrumb.image) {
                            <img [src]="breadcrumb?.image" class="mat-icon" />
                        }
                    </button>
                } @else {
                    <button
                        mat-button
                        class="breadcrumb-button"
                        color="secondary"
                        [routerLink]="breadcrumb.path"
                        [disabled]="last"
                    >
                        @if (breadcrumb.icon) {
                            <mat-icon>{{ breadcrumb.icon }}</mat-icon>
                        } @else if (breadcrumb.image) {
                            <img [src]="breadcrumb?.image" class="mat-icon" />
                        }

                        @if (breadcrumb.useTemplate) {
                            <template
                                [ngTemplateOutletContext]="{
                                    $implicit: breadcrumb
                                }"
                                [ngTemplateOutlet]="breadcrumbTemplate"
                            ></template>
                        } @else {
                            <span>{{ breadcrumb.name }}</span>
                        }
                    </button>
                }
            }

            @if (!last) {
                <mat-icon class="breadcrumb-next" fontIcon="navigate_next"></mat-icon>
            }
        }
    `,
})
export class KazaamBreadcrumbComponent {
    #breadcrumbs = signal<Breadcrumb[]>([]);
    get breadcrumbs(): Signal<Breadcrumb[]> {
        return this.#breadcrumbs.asReadonly();
    }

    @ContentChild('breadcrumbTemplate') breadcrumbTemplate!: TemplateRef<unknown>;
    @ContentChild('breadcrumbChildTemplate') breadcrumbChildTemplate!: TemplateRef<unknown>;

    constructor(
        public route: ActivatedRoute,
        private router: Router,
        private injector: Injector,
    ) {
        this.router.events
            .pipe(filter((x) => x instanceof NavigationEnd || (x as any)['routerEvent'] instanceof NavigationEnd))
            .subscribe(() => {
                const routeRoot = router.routerState.snapshot.root;
                const breadcrumbs = this.resolveBreadcrumbs(routeRoot);

                this.#breadcrumbs.update(() => breadcrumbs);
            });
    }

    private resolveBreadcrumbs(route: ActivatedRouteSnapshot): Breadcrumb[] {
        const breadcrumbs: Breadcrumb[] = [];
        let currentRoute: ActivatedRouteSnapshot | null = route;

        while (currentRoute) {
            if (
                (currentRoute.routeConfig?.data && currentRoute.data?.['breadcrumb']) ||
                (currentRoute.routeConfig?.resolve && currentRoute.routeConfig?.resolve?.['breadcrumb'])
            ) {
                const breadcrumb: Breadcrumb = getBreadcrumb(currentRoute);

                const children = getChildrenBreadcrumb(currentRoute);
                if (children && children?.length > 1) {
                    breadcrumb.children = children;
                }

                breadcrumb.childrenHasIcon = breadcrumb.children?.some((c) => c.icon !== undefined);
                breadcrumb.childrenHasImage = breadcrumb.children?.some((c) => c.image !== undefined);

                breadcrumbs.push(breadcrumb);
            }
            currentRoute = currentRoute.firstChild;
        }

        return breadcrumbs;

        function getChildrenBreadcrumb(route: ActivatedRouteSnapshot) {
            let children = route.routeConfig?.children
                ?.filter((x) => !['', '**'].includes(x.path ?? '') && !x.path?.startsWith(':'))
                .map(
                    (x) =>
                        ({
                            ...x.data?.['breadcrumb'],
                            ...x.resolve?.['breadcrumb'](),
                            path: `${[...route.pathFromRoot.map((p) => p.routeConfig?.path), x.path].join('/')}`,
                        }) as Breadcrumb,
                );

            if (route.routeConfig?.resolve) {
                const ddd = route.routeConfig?.resolve?.['breadcrumb']().children?.map((c: Partial<Breadcrumb>) => ({
                    ...c,
                    path: `${[...route.pathFromRoot.map((p) => p.routeConfig?.path), c.path].join('/')}`,
                }));
                children = children ? [...children, ...(ddd ?? [])] : [...(ddd ?? [])];
            }

            return children?.sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || (a.name ?? '').localeCompare(b.name ?? ''));
        }

        function getBreadcrumb(route: ActivatedRouteSnapshot): Breadcrumb {
            return {
                ...route.routeConfig?.resolve?.['breadcrumb'](),
                ...route.data['breadcrumb'],
                path: `${route.pathFromRoot.map((p) => p.routeConfig?.path).join('/')}`,
                parent: breadcrumbs[breadcrumbs.length - 1],
            };
        }
    }
}
