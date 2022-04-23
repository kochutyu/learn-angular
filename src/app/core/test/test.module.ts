import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import {ToggleAccordionModule} from "../directives/toggle-accordion/toggle-accordion.module";



@NgModule({
  declarations: [
    AccordionComponent
  ],
  exports: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ToggleAccordionModule
  ]
})
export class TestModule { }
