import { APP_INITIALIZER, importProvidersFrom, Injector } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {
    PreloadAllModules,
    Router,
    RouterModule,
    provideRouter,
    withComponentInputBinding,
    withEnabledBlockingInitialNavigation,
    withHashLocation,
    withPreloading,
} from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { Observable } from 'rxjs';
import { MarkdownService } from '@portfolio/angular/common';
// import { HIGHLIGHT_OPTIONS, provideHighlightOptions } from 'ngx-highlightjs';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(
        httpClient,
        'https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/portfolio/i18n/',
        '.json',
    );
}

export function initializeApplication(markdownService: MarkdownService): () => Promise<any> {
    return (): Promise<any> => {
        console.log('Initializing application');
        return markdownService.init();
    };
}

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),

        {
            provide: APP_INITIALIZER,
            useFactory: initializeApplication,
            deps: [MarkdownService],
            multi: true,
        },

        provideAnimations(),

        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient],
                },
            }),
        ),

        provideRouter(
            APP_ROUTES,
            withComponentInputBinding(),
            withHashLocation(),
            // withPreloading(PreloadAllModules),
        ),

        provideCharts(withDefaultRegisterables()),

        // provideHighlightOptions({
        //     fullLibraryLoader: () => import('highlight.js'),
        // }),
    ],
});
