import {
  ContentChild,
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';
import {ToggleAccordionContentDirective} from "./toggle-accordion-content.directive";

@Directive({
  selector: '[appToggleAccordionItem]'
})
export class ToggleAccordionItemDirective {
  index: number | undefined;

  @ContentChild(ToggleAccordionContentDirective) content: ToggleAccordionContentDirective | undefined;

  @HostListener('click') onClick() {}

  @HostBinding('class.active') isOpen = false;

  show() {
    this.isOpen = true;
    this.content?.showContent();
    this.content?.changeState.emit('open');
  }

  hide() {
    this.isOpen = false;
    this.content?.hideContent();
    this.content?.changeState.emit('close');
  }

  toggle() {
    if (this.isOpen) {
      this.hide();
    } else {
      this.show();
    }
  }

}
