import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutHelpComponent } from './about-help/about-help.component';

const routes: Routes = [
    {
        path: '',
        component: AboutHelpComponent,
    },
];

@NgModule({
    declarations: [AboutHelpComponent],
    imports: [
        RouterModule.forChild(routes),

        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
    ],
    providers: [],
})
export class AboutHelpModule {}
