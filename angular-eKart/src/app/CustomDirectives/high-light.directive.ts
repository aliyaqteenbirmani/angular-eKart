import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private element: ElementRef,private renderer:Renderer2) {
  }

  @HostListener('mouseover') onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'highlight-product');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product');
  }

}
