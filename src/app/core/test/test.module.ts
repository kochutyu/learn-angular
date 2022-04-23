import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionComponent} from './accordion/accordion.component';
import {ToggleAccordionModule} from "../directives/toggle-accordion/toggle-accordion.module";
import {ServicesComponent} from './services/services.component';


@NgModule({
  declarations: [
    AccordionComponent,
    ServicesComponent
  ],
  exports: [
    AccordionComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ToggleAccordionModule
  ]
})
export class TestModule {
}
