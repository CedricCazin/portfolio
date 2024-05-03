import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'trustHtml',
    standalone: true,
})
export class TrustHtml implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: string | null): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustHtml(value ?? '');
    }
}
