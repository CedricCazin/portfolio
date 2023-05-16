import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ColorSchemeService } from './colorScheme.service';
import { StyleManagerService } from './styleManager.service';

declare class FinisherHeader {
  constructor(i: any);
}

interface Theme {
  name: string;
  id: string;
  isDefault?: boolean;
}

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'web-app';

  cursorLeft = '';
  cursorTop = '';
  cursorOpacity = '';

  themes: Theme[] = [
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

  public showHelp = true;

  private _darkTheme = true;
  public get darkTheme(): boolean {
    return this._darkTheme;
  }
  public set darkTheme(isDark: boolean) {
    this.renderer.removeClass(this.document.body, this.currentTheme);
    this._darkTheme = isDark;
    this.colorSchemeService.update(this._darkTheme ? 'dark' : 'light');
    this.renderer.addClass(this.document.body, this.currentTheme);
  }

  private _theme: Theme = this.themes[0];
  public get theme(): Theme {
    return this._theme;
  }
  public set theme(theme: Theme) {
    this.renderer.removeClass(this.document.body, this.currentTheme);
    this._theme = theme;
    this.styleManagerService.setStyle('theme', `${theme.id}-themes.css`);
    this.renderer.addClass(this.document.body, this.currentTheme);
  }

  public get currentTheme() {
    return `${this._theme.id}-${this.darkTheme ? 'dark' : 'light'}-theme`;
  }

  public getThemePreview(theme: Theme) {
    return `/assets/themes/${theme.id}-${this.darkTheme ? 'dark' : 'light'}-theme.svg`;
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private host: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private colorSchemeService: ColorSchemeService,
    private styleManagerService: StyleManagerService,

  ) {
    // Load Color Scheme
    this.colorSchemeService.load();
    this._darkTheme = this.colorSchemeService.currentActive() === 'dark' ? true : false;

    // Load theme
    this.theme = this.themes[0];

    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/github/github-mark.svg')
    );

    this.renderer.addClass(this.document.body, this.currentTheme);
  }

  ngAfterViewInit(): void {
    this.initHeader();
  }

  private initHeader() {
    new FinisherHeader({
      count: 6,
      size: {
        min: 1100,
        max: 1300,
        pulse: 0,
      },
      speed: {
        x: {
          min: 0.1,
          max: 0.3,
        },
        y: {
          min: 0.1,
          max: 0.3,
        },
      },
      colors: {
        background: '#9138e5',
        particles: ['#6bd6ff', '#ffcb57', '#ff333d'],
      },
      blending: 'overlay',
      opacity: {
        center: 1,
        edge: 0.1,
      },
      skew: -2,
      shapes: ['c'],
    });
  }

  onClick() {
    console.log('click');
  }

  // --

  @HostListener('mousemove', ['$event'])
  onMousemove(event: any) {
    const x = event.pageX;
    const y = event.pageY;

    this.cursorLeft = (x - 175) + "px";
    this.cursorTop = (y - 175) + "px";
    this.cursorOpacity = '1';
  }
}
