import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card3dModule } from '../card3d/card3d.module';
import { KazaamFloatingContentModule } from '@ceca/kazaam/floatingContent';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,

    Card3dModule,

    KazaamFloatingContentModule,
  ],
  providers: [],
})
export class HomeModule {}
