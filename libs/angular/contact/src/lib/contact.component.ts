import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [CommonModule],
    providers: [ContactService],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    constructor(private router: Router) {}
}
