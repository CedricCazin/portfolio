import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, signal } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { MarkdownContentComponent } from './markdown-content.component';

export interface MarkdownContent {
    name: string;
    path: string;
    icon?: string;
    order?: number;
    content?: string;
    children?: MarkdownContent[];
}

export interface MarkdownContentStore {
    markdownRoutesResolved: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class MarkdownService {
    #markdownRoutesResolved = signal(false);
    public readonly markdownRoutesResolved = this.#markdownRoutesResolved.asReadonly();

    constructor(
        private readonly router: Router,
        private readonly httpClient: HttpClient,
    ) {}

    async init(): Promise<void> {
        const routes = this.router.config;
        await this.resolveMarkdownRoutes(this.router.config);

        console.log(this.router.url);
        console.log(this.router.config);
        this.router.resetConfig(routes);
        console.log(this.router.url);
        console.log(this.router.config);

        this.#markdownRoutesResolved.update(() => true);
    }

    async resolveMarkdownRoutes(routes: Routes) {
        for (const route of routes) {
            if (route.data?.['markdownContainerUri']) {
                const content = await firstValueFrom(
                    this.httpClient.get<MarkdownContent[]>(route.data['markdownContainerUri']),
                );
                route.children = content.map(this.convertContentToRoute);
            } else if (route.children) {
                await this.resolveMarkdownRoutes(route.children);
            }
        }
    }

    convertContentToRoute(content: MarkdownContent): Route {
        const route = {
            path: content.path,
            component: MarkdownContentComponent,
            data: {
                contentUri: content.content,
                navigation: {
                    name: content.name,
                    icon: content.icon,
                    order: content.order,
                },
            },
        } as Route;

        if (content.children) {
            route.children = content.children
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) && a.name.localeCompare(b.name))
                .map(this.convertContentToRoute);

            const defaultRoute = route.children.find((child) => child.data?.['navigation']?.default);
            if (defaultRoute) {
                route.children.push({
                    path: '',
                    redirectTo: defaultRoute.path,
                    pathMatch: 'full',
                });
            }
        }

        return route;
    }
}
