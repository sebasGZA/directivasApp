import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>
  @Input() color!: string
  @Input() mensaje: string = 'Campo requerido'

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el
  }

  ngOnInit(): void {
    this.setMensaje()
    this.setColor()
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color
  }

}
