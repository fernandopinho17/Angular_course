import { Directive, HostListener } from "@angular/core";


@Directive({
  selector: '[appListener]',
})
export class ListenerDirective {
  @HostListener('click')
  onClick() {
    console.log("clicou!")
  }


  @HostListener('Keyup')
  onKeyUp(){
    console.log('Digitou')
  }
}
