import { Directive, ElementRef,OnInit } from "@angular/core";


@Directive({
    selector: '[setBackGround]'
})


export class SetBackGround implements  OnInit {

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = '#36454f';
        this.element.nativeElement.style.color = 'white';
    }
}