import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>
  @Input() color: string = 'red'

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el
  }

  ngOnInit(): void {
    console.log('ngOnInit Directive')
    this.setColor()
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color
  }

}
