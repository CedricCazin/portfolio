import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(
        httpClient,
        'https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/portfolio/i18n/',
        '.json',
    );
}

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),

        provideHttpClient(),

        provideCharts(withDefaultRegisterables()),

        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient],
                },
            }),
        ),

        importProvidersFrom(
            RouterModule.forRoot(APP_ROUTES, {
                initialNavigation: 'enabledBlocking',
                useHash: true,
            }),
        ),
    ],
});
