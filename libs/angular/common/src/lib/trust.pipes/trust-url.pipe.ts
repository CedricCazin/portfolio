import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
    name: 'trustUrl',
    standalone: true,
})
export class TrustUrl implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(value);
    }
}
