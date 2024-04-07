import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [CommonModule],
    providers: [ContactService],
    templateUrl: './contact-main.component.html',
    styleUrls: ['./contact-main.component.scss'],
})
export class ContactMainComponent {
    constructor(private router: Router) {}
}
