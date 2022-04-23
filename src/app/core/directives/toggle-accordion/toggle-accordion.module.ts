import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleAccordionItemDirective } from './toggle-accordion-item.directive';
import { ToggleAccordionWrapperDirective } from './toggle-accordion-wrapper.directive';
import { ToggleAccordionContentDirective } from './toggle-accordion-content.directive';



@NgModule({
  declarations: [
    ToggleAccordionItemDirective,
    ToggleAccordionWrapperDirective,
    ToggleAccordionContentDirective
  ],
  exports: [
    ToggleAccordionWrapperDirective,
    ToggleAccordionItemDirective,
    ToggleAccordionContentDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ToggleAccordionModule { }
