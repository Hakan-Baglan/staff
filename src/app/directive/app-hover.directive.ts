import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {
 
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'red';
  @HostBinding('class.bg') toggle: boolean = true;

}
