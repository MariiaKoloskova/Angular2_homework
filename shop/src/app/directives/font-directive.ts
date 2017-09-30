import { Input, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appFontSize]'
  })
  
export class FontDirective {
    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @Input('appFontSize') fontsize: string;
    private el: HTMLElement;
    
    private changeFontSize(fontsize: string) {
        this.el.style.fontSize = fontsize;
    }

    @HostListener('click') onClick() {
        this.changeFontSize(this.fontsize || '15px');
    }
}
