import { AfterViewInit, Directive, ElementRef, HostBinding, input, OnInit } from "@angular/core";


@Directive({
  selector: '[appFocusSecondInput]'
})

export class FocusSecondInputDirective implements AfterViewInit{
  //@HostBinding('style.backgroundColor') bgColor = 'blue';
  //@HostBinding('textContent') text = 'Sou uma div';

  constructor(private _elRef: ElementRef){

  }
  ngAfterViewInit() {
      const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];


      if(inputList.length > 1) {
        inputList[1].focus();
      }
  }
}
