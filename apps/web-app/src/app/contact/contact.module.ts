import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { FloatingSkillModule } from '../shared/floating-skill/floating-skill.module';
import { ContactService } from './contact.service';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,

    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,

    FloatingSkillModule,
  ],
  providers: [
    ContactService,
  ],
})
export class ContactModule { }
