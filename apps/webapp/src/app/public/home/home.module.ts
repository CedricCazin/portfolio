import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Card3dModule } from '../../card3d/card3d.module';
import { MatCardModule } from '@angular/material/card';
import { KazaamFloatingContentModule } from '@ceca/kazaam/floatingContent';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    Card3dModule,

    MatCardModule,
    KazaamFloatingContentModule,
  ],
  providers: [],
})
export class HomeModule {}
