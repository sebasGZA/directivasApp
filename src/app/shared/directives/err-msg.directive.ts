import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red'
  private _mensaje: string = 'Campo Requerido'

  htmlElement: ElementRef<HTMLElement>
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor
    this._color = valor
  }
  @Input() set mensaje(valor: string) {
    this.htmlElement.nativeElement.innerText = valor
    this._mensaje = valor
  }
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el
  }

  ngOnInit(): void {
    // console.log(this.color)
    // console.log(this.mensaje)
    // this.setMensaje()
    // this.setColor()
    this.setEstilo()
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue
    //   this.htmlElement.nativeElement.innerText = mensaje

    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue
    //   this.htmlElement.nativeElement.style.color = color

    // }
    console.log(changes)
  }

  // setMensaje(): void {
  //   this.htmlElement.nativeElement.innerText = this.mensaje
  //   this.htmlElement.nativeElement.classList.add('form-text')
  // }

  // setColor(): void {
  //   this.htmlElement.nativeElement.style.color = this.color
  // }

}
