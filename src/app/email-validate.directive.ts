

import {Directive, ElementRef, Renderer} from '@angular/core';


@Directive({
  selector: '[EmailValidate]',
  host: {
    '(focus)': 'onFocus($event)',
    '(blur)': 'onBlur($event)'
  }
})
export class EmailValidateDirective {
 //   private validators: any;
 //   private asyncValidators: any;

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
    console.log('here');
  }

    onFocus($event: any) {
      console.log($event);
    }

    onBlur($event: any) {
      console.log($event);
    }
}
