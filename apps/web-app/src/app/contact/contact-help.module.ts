import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactHelpComponent } from './contact-help/contact-help.component';

const routes: Routes = [
    {
        path: '',
        component: ContactHelpComponent,
    },
];

@NgModule({
    declarations: [ContactHelpComponent],
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
export class ContactHelpModule {}
