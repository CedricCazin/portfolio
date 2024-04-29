import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

export interface ThemeState {
    theme: Theme;
    isDarkMode: boolean;
    isGlassMode: boolean;
}

export interface Theme {
    name: string;
    id: string;
    isDefault?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private renderer: Renderer2;

    public readonly themes: Theme[] = [
        {
            name: 'Deep Purple & Amber',
            id: 'deep-purple-amber',
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

    private glassModePrefix = 'glass-scheme';
    private darkModePrefix = 'color-scheme-';

    public readonly defaultTheme = this.themes[0];
    public readonly defaultDarkMode = this.detectDarkMode();

    #themeSettings = signal<ThemeState>({
        theme: this.defaultTheme,
        isDarkMode: this.defaultDarkMode,
        isGlassMode: true,
    });
    public readonly themeSettings = this.#themeSettings.asReadonly();

    constructor(
        @Inject(DOCUMENT) private document: Document,
        rendererFactory: RendererFactory2,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);

        this.updateTheme();
        this.updateDarkMode();
        this.updateGlassMode();
    }

    public setTheme(theme: Theme) {
        this.#themeSettings.update((current) => ({ ...current, theme }));

        this.updateTheme();
    }

    public setIsDarkMode(isDarkMode: boolean) {
        this.#themeSettings.update((current) => ({ ...current, isDarkMode }));

        this.updateDarkMode();
    }

    public setIsGlassMode(isGlassMode: boolean) {
        this.#themeSettings.update((current) => ({ ...current, isGlassMode }));

        this.updateGlassMode();
    }

    // renderer functions

    public get currentThemeClass() {
        return `${this.themeSettings().theme.id}-${this.themeSettings().isDarkMode ? 'dark' : 'light'}-theme`;
    }

    updateTheme() {
        const theme = this.themeSettings().theme;

        this.renderer.removeClass(this.document.body, this.currentThemeClass);

        this.getLinkElementForKey('theme').setAttribute('href', `${theme.id}-themes.css`);

        this.renderer.addClass(this.document.body, this.currentThemeClass);
    }

    removeTheme(key: string) {
        const existingLinkElement = this.getExistingLinkElementByKey(key);

        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }

    detectDarkMode() {
        let isDarkMode = true;
        // Detect if prefers-color-scheme is supported
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise, set it to Light.
            isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false;
        }

        return isDarkMode;
    }

    updateDarkMode() {
        const isDarkMode = this.themeSettings().isDarkMode;

        // Remove the old color-scheme class
        this.renderer.removeClass(document.body, this.darkModePrefix + (isDarkMode ? 'light' : 'dark'));

        // Add the new / current color-scheme class
        this.renderer.addClass(document.body, this.darkModePrefix + (isDarkMode ? 'dark' : 'light'));
    }

    updateGlassMode() {
        const isGlassMode = this.themeSettings().isGlassMode;

        if (isGlassMode) {
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
