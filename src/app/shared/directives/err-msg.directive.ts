import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mensaje']) {
      const mensaje = changes['mensaje'].currentValue
      this.htmlElement.nativeElement.innerText = mensaje

    }

    if (changes['color']) {
      const color = changes['color'].currentValue
      this.htmlElement.nativeElement.style.color = color

    }
    console.log(changes)
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color
  }

}
