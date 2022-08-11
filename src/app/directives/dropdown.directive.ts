import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isAttached = false;

  @HostListener('document:click', ['$event'])
  toggleStyle(event: Event) {
    this.isAttached = this.elementRef.nativeElement.contains(event.target) ? !this.isAttached : false;
  }

  constructor(private elementRef: ElementRef) {

  }
}
