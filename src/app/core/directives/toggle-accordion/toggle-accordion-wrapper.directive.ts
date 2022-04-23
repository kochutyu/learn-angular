import {AfterContentInit, ContentChildren, Directive, EventEmitter, Output, QueryList,} from '@angular/core';
import {ToggleAccordionItemDirective} from "./toggle-accordion-item.directive";

@Directive({
  selector: '[appToggleAccordionWrapper]'
})
export class ToggleAccordionWrapperDirective implements AfterContentInit {

  previousItem: ToggleAccordionItemDirective | undefined;

  @ContentChildren(ToggleAccordionItemDirective) items: QueryList<ToggleAccordionItemDirective> | undefined;

  @Output() changeAccordion: EventEmitter<ToggleAccordionItemDirective> = new EventEmitter<ToggleAccordionItemDirective>();

  ngAfterContentInit() {
    this.items?.toArray().forEach((item, index) => {
      item.index = index;
      item.onClick = this.changeItem.bind(this, item);
    })
  }

  changeItem(item: ToggleAccordionItemDirective) {
    if (this.previousItem?.index === item.index) {
      item.toggle();
    } else {
      this.items?.forEach(el => {
        el.hide();
      });
      item.show();
      this.previousItem = item;
      this.changeAccordion.emit(item);
    }
  }

}
