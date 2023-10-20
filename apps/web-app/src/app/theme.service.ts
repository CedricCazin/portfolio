import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

// ! Based on https://github.com/angular/material.angular.io/blob/main/src/app/shared/style-manager/style-manager.ts

export interface Theme {
    name: string;
    id: string;
    isDefault?: boolean;
}

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
    private renderer: Renderer2;

    public readonly themes: Theme[] = [
        {
            name: 'Deep Purple & Amber',
            id: 'deep-purple-amber',
            isDefault: true,
        },
        {
            name: 'Indigo & Pink',
            id: 'indigo-pink',
        },
        {
            name: 'Pink & Blue Grey',
            id: 'pink-blue-grey',
        },
        {
            name: 'Purple a Green',
            id: 'purple-green',
        },
    ];

    private _theme: Theme = this.themes[0];
    public set theme(theme: Theme) {
        this.updateTheme(theme);
    }
    public get theme(): Theme {
        return this._theme;
    }

    public get currentTheme() {
        return `${this._theme.id}-${this._darkMode ? 'dark' : 'light'}-theme`;
    }

    private _darkMode = false;
    public set darkMode(darkMode: boolean) {
        this.updateDarkMode(darkMode);
    }
    public get darkMode(): boolean {
        return this._darkMode;
    }

    private darkModePrefix = 'color-scheme-';

    private _glassMode = false;
    public set glassMode(glassMode: boolean) {
        this.updateGlassMode(glassMode);
    }
    public get glassMode(): boolean {
        return this._glassMode;
    }

    private glassModePrefix = 'glass-scheme';

    constructor(@Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
        // Create new renderer from renderFactory, to make it possible to use renderer2 in a service
        this.renderer = rendererFactory.createRenderer(null, null);

        this.detectDarkMode();

        this.updateTheme(this._theme);
        this.updateDarkMode(this._darkMode);
        this.updateGlassMode(this._glassMode);
    }

    /**
     * Set the stylesheet with the specified key.
     */
    updateTheme(theme: Theme) {
        this.renderer.removeClass(this.document.body, this.currentTheme);

        this._theme = theme;

        this.getLinkElementForKey('theme').setAttribute('href', `${this._theme.id}-themes.css`);

        this.renderer.addClass(this.document.body, this.currentTheme);
    }

    /**
     * Remove the stylesheet with the specified key.
     */
    removeTheme(key: string) {
        const existingLinkElement = this.getExistingLinkElementByKey(key);

        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }

    detectDarkMode() {
        // Detect if prefers-color-scheme is supported
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise, set it to Light.
            this._darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false;
        } else {
            // If the browser does not support prefers-color-scheme, set the default to dark.
            this._darkMode = true;
        }
    }

    updateDarkMode(darkMode: boolean) {
        // Remove the old color-scheme class
        this.renderer.removeClass(document.body, this.darkModePrefix + (this._darkMode ? 'dark' : 'light'));

        this._darkMode = darkMode;

        // Add the new / current color-scheme class
        this.renderer.addClass(document.body, this.darkModePrefix + (this._darkMode ? 'dark' : 'light'));
    }

    updateGlassMode(glassMode: boolean) {
        this._glassMode = glassMode;

        if (this._glassMode) {
            this.renderer.addClass(document.body, this.glassModePrefix);
        } else {
            this.renderer.removeClass(document.body, this.glassModePrefix);
        }
    }

    private getLinkElementForKey(key: string) {
        return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
    }

    private getExistingLinkElementByKey(key: string) {
        return document.head.querySelector(`link[rel="stylesheet"].${this.getClassNameForKey(key)}`);
    }

    private createLinkElementWithKey(key: string) {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.classList.add(this.getClassNameForKey(key));
        document.head.appendChild(linkEl);
        return linkEl;
    }

    private getClassNameForKey(key: string) {
        return `style-manager-${key}`;
    }
}
