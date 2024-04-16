// import { Injectable, Injector } from '@angular/core';
// import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';

// import { Observable, of, BehaviorSubject, concat } from 'rxjs';

// import { filter, distinct, toArray, first, tap, mergeMap } from 'rxjs/operators';

// import { BreadcrumbConfig } from './breadcrumb.config';
// import { Breadcrumb } from './breadcrumb.models';
// import { BreadcrumbUtils } from './breadcrumb.utils';
// import { BreadcrumbResolver } from './breadcrumb.resolver';

// @Injectable()
// export class BreadcrumbService {
//     private breadcrumbs = new BehaviorSubject<Breadcrumb[]>([]);
//     private defaultResolver = new BreadcrumbResolver();

//     constructor(
//         public route: ActivatedRoute,
//         private router: Router,
//         private config: BreadcrumbConfig,
//         private injector: Injector,
//     ) {
//         this.router.events
//             .pipe(filter((x) => x instanceof NavigationEnd || (x as any)['routerEvent'] instanceof NavigationEnd))
//             .subscribe(() => {
//                 const routeRoot = router.routerState.snapshot.root;

//                 this.resolveCrumbs(routeRoot)
//                     .pipe(
//                         mergeMap((crumbs: Breadcrumb[]) => crumbs),
//                         this.config.applyDistinctOn
//                             ? distinct((crumb: Breadcrumb) => crumb[this.config.applyDistinctOn as keyof Breadcrumb])
//                             : tap(),
//                         toArray(),
//                         mergeMap((crumbs: Breadcrumb[]) => {
//                             if (this.config.postProcess) {
//                                 const postProcessedCrumb = this.config.postProcess(crumbs);

//                                 return BreadcrumbUtils.wrapIntoObservable<Breadcrumb[]>(postProcessedCrumb).pipe(first());
//                             } else {
//                                 return of(crumbs);
//                             }
//                         }),
//                     )
//                     .subscribe((crumbs: Breadcrumb[]) => {
//                         this.breadcrumbs.next(crumbs);
//                     });
//             });
//     }

//     get crumbs$(): Observable<Breadcrumb[]> {
//         return this.breadcrumbs;
//     }

//     public getCrumbs(): Observable<Breadcrumb[]> {
//         return this.crumbs$;
//     }

//     private resolveCrumbs(route: ActivatedRouteSnapshot): Observable<Breadcrumb[]> {
//         let crumbs$: Observable<Breadcrumb[]>;

//         const data = route.routeConfig?.data;
//         if (data?.['breadcrumbs']) {
//             let resolver: BreadcrumbResolver;

//             if (data['breadcrumbs'].prototype instanceof BreadcrumbResolver) {
//                 resolver = this.injector.get<BreadcrumbResolver>(data['breadcrumbs']);
//             } else {
//                 resolver = this.defaultResolver;
//             }

//             const result = resolver.resolve(route, this.router.routerState.snapshot);

//             crumbs$ = BreadcrumbUtils.wrapIntoObservable<Breadcrumb[]>(result).pipe(first());
//         } else {
//             crumbs$ = of([]);
//         }

//         if (route.firstChild) {
//             crumbs$ = concat(crumbs$, this.resolveCrumbs(route.firstChild));
//         }

//         return crumbs$;
//     }
// }
