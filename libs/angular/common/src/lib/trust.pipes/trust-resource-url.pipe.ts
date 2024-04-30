import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'trustResourceUrl',
    standalone: true,
})
export class TrustResourceUrl implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
}
