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
    ) {
        console.log('MarkdownService.constructor');
    }

    async init(): Promise<any> {
        const routes = this.router.config;
        await this.resolveMarkdownRoutes(this.router.config);
        this.router.resetConfig(routes);

        console.log(`routes: ${JSON.stringify(routes)}`);

        this.#markdownRoutesResolved.update(() => true);
    }

    async resolveMarkdownRoutes(routes: Routes) {
        for (const route of routes) {
            if (route.data?.['markdownContainerUri']) {
                const content = await firstValueFrom(
                    this.httpClient.get<MarkdownContent[]>(route.data['markdownContainerUri']),
                );
                route.children = content.map((child) => this.convertContentToRoute(child), this);
            } else if (route.children) {
                await this.resolveMarkdownRoutes(route.children);
            }
        }
    }

    convertContentToRoute(content: MarkdownContent, parentPath?: string): Route {
        const route = {
            path: content.path,
            data: {
                fullPath: parentPath ? parentPath + '/' + content.path : content.path,
                name: content.name,
                icon: content.icon,
                order: content.order,
            },
        } as Route;

        if (!content.children) {
            route.component = MarkdownContentComponent;
            route.data!['contentUri'] = content.content;
        } else {
            route.children = content.children
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) && a.name.localeCompare(b.name))
                .map((child) => this.convertContentToRoute(child, content.path), this);

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
