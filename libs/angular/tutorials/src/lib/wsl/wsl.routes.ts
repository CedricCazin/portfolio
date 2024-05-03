// import { Route, Routes } from '@angular/router';
// import { AngularExamplesComponent } from './wsl.component';
// import { INJECTOR, Injector, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of, switchMap } from 'rxjs';
// import { firstValueFrom } from 'rxjs';

// export async function getWsLRoutes(): Promise<Routes> {
//     Injec
//     const httpClient: HttpClient = inject(HttpClient);
//     return firstValueFrom(
//         httpClient
//             .get('https://raw.githubusercontent.com/CedricCazin/CedricCazin/main/001-setup-WSL-dev-environment/tutorials.json')
//             .pipe(
//                 switchMap((tutos) => {
//                     const routes: Routes = [
//                         {
//                             path: '',
//                             component: AngularExamplesComponent,
//                             children: [],
//                         },
//                     ];

//                     return of(routes);
//                 }),
//             ),
//     );
// }
