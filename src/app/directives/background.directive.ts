import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{
  // #4
  // @Input() hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';

  // #4.1
  @Input('appBackground') hoverColor: string = 'red';

  // #3
  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // #4
    this.background = this.defaultColor;

    // for #1 and #2
    // console.log(this.element);
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'color', 'silver');
    // this.renderer.addClass(nativeElement, 'marginTop' );
    // nativeElement.style.backgroundColor = 'lightGreen';
  }

  // #4
  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    this.background = this.hoverColor;
  }
  @HostListener('mouseleave')  mouseLeave() {
    this.background = this.defaultColor;
  }

  // #1
  // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
  //   console.log(event);
  // }

  // #2
  // @HostListener('mouseleave')  mouseLeave() {
  //   const {nativeElement} = this.element;
  //   this.renderer.removeClass(nativeElement,  'marginTop' );
  //   this.renderer.setStyle(nativeElement, 'color', 'black');
  //   nativeElement.style.backgroundColor = 'transparent';
  // }

  // #3
  // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
  //   // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
  //   this.background = 'red';
  // }
  // @HostListener('mouseleave')  mouseLeave() {
  //   // this.renderer.setStyle(this.element.nativeElement,  'background-color', 'transparent' );
  //   this.background = 'transparent';
  //
  // }
}
