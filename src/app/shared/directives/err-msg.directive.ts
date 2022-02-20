import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red'
  private _mensaje: string = 'Campo Requerido'
  htmlElement: ElementRef<HTMLElement>
  @Input() set color(valor: string) {
    this.setColor()
    this._color = valor
  }
  @Input() set mensaje(valor: string) {
    this.setMensaje()
    this._mensaje = valor
  }
  @Input() set valido(valor: boolean) {
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden')
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden')
    }
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
    this.setColor()
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
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color
  }

}
