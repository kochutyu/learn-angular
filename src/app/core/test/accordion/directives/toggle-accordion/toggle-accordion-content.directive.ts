import {Directive, EventEmitter, HostBinding, Output} from '@angular/core';

@Directive({
  selector: '[appToggleAccordionContent]'
})
export class ToggleAccordionContentDirective {

  @HostBinding('style.visibility') display = 'hidden';

  @Output() changeState: EventEmitter<'open' | 'close'> = new EventEmitter<"open" | "close">();

  showContent() {
    this.display = 'visible';
  }

  hideContent() {
    this.display = 'hidden';
  }

}
