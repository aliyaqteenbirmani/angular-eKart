import { Directive, ElementRef,Input,OnInit,Renderer2 } from "@angular/core";


@Directive({
    selector: '[setBackGround]'
})


export class SetBackGround implements  OnInit {

    // @Input('setBackGround') backColor: string = "#36454f";
    // @Input() textColor: string = 'white';

    @Input('setBackGround') changeTextAndBackColor:{backColor:string,textColor:string};
    constructor(private element: ElementRef,private renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor);
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'Click to copy');
    }
}